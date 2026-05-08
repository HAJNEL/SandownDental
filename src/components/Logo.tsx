import { useState } from 'react';
import { cn, assetUrl } from '@/src/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export default function Logo({ className, variant = 'color' }: LogoProps) {
  const [error, setError] = useState(false);

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Try to use the logo image first */}
      {!error ? (
        <img 
          src={assetUrl('/assets/logo.png')} 
          alt="Sandown Dental Logo" 
          className={cn(
            "w-full h-full object-contain",
            variant === 'light' && "ring-white invert hover:invert-0",
            variant === 'dark' && "invert-0"
          )}
          onError={() => setError(true)}
        />
      ) : (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer Circle */}
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="currentColor"
            strokeWidth="2"
            className={cn(
              variant === 'light' ? "text-white" : "text-slate-900"
            )}
          />
          
          {/* Stylized Tooth & Leaf Group */}
          <g 
            className={cn(
              variant === 'light' ? "text-white" : "text-slate-900"
            )}
          >
            {/* Branch on the left - matches the visual flow of the provided image */}
            <path
              d="M15 60C18 70 25 78 35 83M20 50C18 40 18 30 22 22M25 65C20 55 20 40 25 30"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M15 60L12 55M20 50L18 48M35 83L38 80"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            
            {/* Refined Tooth Shape - more fluid and organic like the image */}
            <path
              d="M50 20C42 20 35 24 32 32C28 45 30 65 38 80C42 88 48 88 50 85C52 88 58 88 62 80C70 65 72 45 68 32C65 24 58 20 50 20Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            
            {/* Elegant SD Script - closely tracing the motion in the image */}
            <path
              d="M40 45C42 38 48 35 52 38C55 42 50 48 42 48C35 48 32 42 35 35C38 30 45 28 50 32C55 35 58 42 55 50C52 58 45 62 38 58"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M55 42C58 38 65 42 65 50C65 58 60 65 52 70C45 75 40 72 42 65"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        </svg>
      )}
    </div>
  );
}
