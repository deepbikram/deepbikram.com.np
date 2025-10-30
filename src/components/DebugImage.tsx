"use client";

import { SmartImage } from "@/once-ui/components";
import { useState } from "react";

interface DebugImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export const DebugImage: React.FC<DebugImageProps> = ({ src, alt, width = 16, height = 9 }) => {
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    setError(`Failed to load image: ${src}`);
    console.error(`Image failed to load: ${src}`);
  };

  const handleLoad = () => {
    setLoaded(true);
    console.log(`Image loaded successfully: ${src}`);
  };

  return (
    <div style={{ position: 'relative' }}>
      {error && (
        <div style={{ 
          background: 'red', 
          color: 'white', 
          padding: '8px', 
          fontSize: '12px',
          marginBottom: '8px'
        }}>
          Error: {error}
        </div>
      )}
      
      <SmartImage
        src={src}
        alt={alt}
        aspectRatio={`${width} / ${height}`}
        onError={handleError}
        onLoad={handleLoad}
        style={{
          border: loaded ? '2px solid green' : '2px solid orange'
        }}
      />
      
      <div style={{ 
        fontSize: '12px', 
        color: loaded ? 'green' : 'orange',
        marginTop: '4px'
      }}>
        Status: {loaded ? 'Loaded' : 'Loading...'}
        <br />
        Path: {src}
      </div>
    </div>
  );
};
