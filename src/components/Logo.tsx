import React from 'react';

interface LogoProps {
  className: string;
  label?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, label }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    role={label ? 'img' : undefined}
    aria-label={label}
    aria-hidden={label ? undefined : true}
  >
    <rect width="24" height="24" rx="5.5" fill="#17643E" />
    <g transform="translate(3.6 3.6) scale(0.7)" fill="#FFFFFF">
      <path d="M3.5 3.5h6v2.2H5.7v3.8H3.5zM20.5 3.5v6h-2.2V5.7h-3.8V3.5zM3.5 20.5v-6h2.2v3.8h3.8v2.2zM20.5 20.5h-6v-2.2h3.8v-3.8h2.2z" />
      <rect x="3.5" y="10.9" width="17" height="2.2" rx="1.1" />
    </g>
  </svg>
);
