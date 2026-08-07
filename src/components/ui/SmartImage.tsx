// Smart image component with lazy loading and placeholder fallback.
// Shows a neutral placeholder if the image fails to load.

import { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function SmartImage({ src, alt, className = '' }: SmartImageProps) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400' : src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={className}
    />
  );
}
