import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    const baseClasses = 'px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
    const primaryClasses = 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
    const secondaryClasses = 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500';

    const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className || ''}`;

    return (
      <button ref={ref} className={classes} type={props.type || 'button'} {...props}>
        {props.children}
      </button>
    );
  }
);

Button.displayName = 'Button';
