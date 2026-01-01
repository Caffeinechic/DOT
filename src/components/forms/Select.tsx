/**
 * Select Component
 * Custom dropdown select with smooth animations
 */

'use client';

import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon } from '../atoms/Icon';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      options,
      placeholder,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    return (
      <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={clsx(
              'w-full px-4 py-2 pr-10 rounded-lg border transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-offset-1',
              'disabled:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-60',
              'appearance-none cursor-pointer',
              hasError
                ? 'border-error-DEFAULT focus:border-error-DEFAULT focus:ring-error-DEFAULT'
                : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500',
              'dark:bg-neutral-800 dark:border-neutral-600 dark:text-neutral-100',
              className
            )}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
            }
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <ChevronDownIcon size="sm" className="text-neutral-500" />
          </div>
        </div>
        {error && (
          <span id={`${selectId}-error`} className="text-sm text-error-DEFAULT" role="alert">
            {error}
          </span>
        )}
        {!error && helperText && (
          <span id={`${selectId}-helper`} className="text-sm text-neutral-500">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
