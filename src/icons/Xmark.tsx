import { strict } from 'assert';
import React from 'react';

interface XmarkProps {
  className?: string;
  size?: number;
}

export default function Xmark({ className, size }: XmarkProps) {
  return (
    <svg
      width={size ?? 80}
      height={size ?? 80}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(0 0 0)"
    >
      <path
        d="M6.75 17.249L17.2479 6.75111M6.75 6.75098L17.2479 17.2489"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
