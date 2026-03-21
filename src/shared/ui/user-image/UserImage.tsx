import { ReactNode, useState, useLayoutEffect, ImgHTMLAttributes } from 'react';
import { User} from 'lucide-react';
import { cn } from '@/shared/lib/utils'; // Твоя утилита для классов

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    defaultFallbackSize?: number;
    defaultFallbackStrokeWidth?: number;
    fallback?: ReactNode; // Кастомная иконка/скелетон при загрузке
    errorFallback?: ReactNode; // Что показать, если src битый
}

export const UserImage = ({
                             className,
                             src,
                             alt = 'image',
                             fallback,
                             errorFallback,
                              defaultFallbackSize,
                              defaultFallbackStrokeWidth,
                             ...otherProps
                         }: AppImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        if (!src) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setHasError(true);
            setIsLoading(false);
        }
    }, [src]);

    const handleLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    // 1. Состояние ошибки — показываем ту самую Lucide иконку
    if (hasError) {
        return errorFallback ?? (
            <div className={cn(
                "flex flex-col items-center justify-center  text-black/50 rounded-xl",
                className
            )}>
                <User size={defaultFallbackSize || 20} strokeWidth={defaultFallbackStrokeWidth || 1.5}/>
            </div>
        );
    }

    return (
        <div className="relative inline-block w-full h-full">
            {/* 2. Состояние загрузки (Skeleton) */}
            {isLoading && (fallback ?? (
                <div className={cn("animate-pulse bg-slate-200 rounded-xl", className)} />
            ))}

            {/* 3. Само изображение */}
            <img
                className={cn(className, isLoading && 'hidden')}
                src={src}
                alt={alt}
                onLoad={handleLoad}
                onError={handleError}
                {...otherProps}
            />
        </div>
    );
};
