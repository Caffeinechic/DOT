/**
 * Radio Component
 * Custom styled radio button with label
 */

'use client';

import React, { forwardRef } from 'react';
import clsx from 'clsx';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              ref={ref}
              type="radio"
              id={radioId}
              className={clsx(
                'peer w-5 h-5 rounded-full border-2 transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-1',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'appearance-none cursor-pointer',
                hasError
                  ? 'border-error-DEFAULT focus:ring-error-DEFAULT'
                  : 'border-neutral-300 focus:ring-primary-500',
                'checked:border-primary-600',
                className
              )}
              aria-invalid={hasError}
              {...props}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary-600 opacity-0 peer-checked:opacity-100 pointer-events-none" />
          </div>
          {label && (
            <label
              htmlFor={radioId}
              className="text-sm font-medium text-neutral-700 dark:text-neutral-300 cursor-pointer"
            >
              {label}
            </label>
          )}
        </div>
        {error && (
          <span className="text-sm text-error-DEFAULT ml-7" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';
