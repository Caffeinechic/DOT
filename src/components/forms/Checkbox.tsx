/**
 * Checkbox Component
 * Custom styled checkbox with label
 */

'use client';

import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { CheckIcon } from '../atoms/Icon';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              className={clsx(
                'peer w-5 h-5 rounded border-2 transition-colors duration-200',
                'focus:outline-none focus:ring-2 focus:ring-offset-1',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'appearance-none cursor-pointer',
                hasError
                  ? 'border-error-DEFAULT focus:ring-error-DEFAULT'
                  : 'border-neutral-300 focus:ring-primary-500',
                'checked:bg-primary-600 checked:border-primary-600',
                className
              )}
              aria-invalid={hasError}
              {...props}
            />
            <CheckIcon
              size="sm"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
            />
          </div>
          {label && (
            <label
              htmlFor={checkboxId}
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

Checkbox.displayName = 'Checkbox';
