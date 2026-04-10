import React from 'react';

interface BellProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function Bell(props: BellProps) {
  return (
    <svg
      width={props.size ?? '20'}
      height={props.size ?? '20'}
      className={props.className}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(0 0 0)"
    >
      <path
        opacity="0.4"
        d="M12.7516 3.50098C12.7516 3.08676 12.4158 2.75098 12.0016 2.75098C11.5874 2.75098 11.2516 3.08676 11.2516 3.50098V4.28801C7.46161 4.6643 4.5016 7.86197 4.5016 11.751V14.865L3.80936 16.7109C3.25776 18.1819 4.34514 19.751 5.9161 19.751H18.0871C19.658 19.7509 20.7454 18.1819 20.1938 16.7109L19.5016 14.865V11.751C19.5016 7.86197 16.5416 4.6643 12.7516 4.28801V3.50098Z"
        fill={props.color ?? '#000000'}
      />
      <path
        d="M14.8736 20.751H9.12622C9.55878 21.918 10.6824 22.7495 11.9999 22.7495C13.3175 22.7495 14.4411 21.918 14.8736 20.751Z"
        fill={props.color ?? '#000000'}
      />
    </svg>
  );
}
