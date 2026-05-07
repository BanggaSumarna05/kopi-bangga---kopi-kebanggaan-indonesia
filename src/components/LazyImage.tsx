import { useState } from 'react';
import clsx from 'clsx';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  imageClassName?: string;
}

export function LazyImage({
  containerClassName,
  imageClassName,
  onLoad,
  ...props
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={clsx('relative overflow-hidden bg-brand-cream', containerClassName)}>
      <div
        className={clsx(
          'absolute inset-0 bg-brand-cream animate-pulse transition-opacity duration-300',
          loaded ? 'opacity-0' : 'opacity-100'
        )}
      />
      <img
        {...props}
        loading="lazy"
        decoding="async"
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
        className={clsx(
          'w-full h-full object-cover transition-opacity duration-500 ease-out',
          loaded ? 'opacity-100' : 'opacity-0',
          imageClassName
        )}
      />
    </div>
  );
}
