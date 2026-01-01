/**
 * FormField Component
 * Wrapper component for form fields with consistent styling
 */

'use client';

import React from 'react';
import clsx from 'clsx';

export interface FormFieldProps {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  error,
  helperText,
  required = false,
  fullWidth = false,
  children,
}) => {
  return (
    <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
      {label && (
        <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {label}
          {required && <span className="text-error-DEFAULT ml-1">*</span>}
        </label>
      )}
      {children}
      {error && (
        <span className="text-sm text-error-DEFAULT" role="alert">
          {error}
        </span>
      )}
      {!error && helperText && (
        <span className="text-sm text-neutral-500">{helperText}</span>
      )}
    </div>
  );
};
