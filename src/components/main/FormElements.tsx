"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    optional?: boolean;
}

export function Input({ label, optional, id, className = "", ...props }: InputProps) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={id} className="text-sm font-medium text-brand-text/90 flex justify-between">
                <span>{label}</span>
                {optional && <span className="text-brand-muted/50 font-normal text-xs">(Opsiyonel)</span>}
            </label>
            <input
                id={id}
                className={`w-full bg-brand-surface border border-brand-text/10 rounded-sm px-4 py-3 min-h-[44px] text-base md:text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors disabled:opacity-50 ${className}`}
                {...props}
            />
        </div>
    );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    optional?: boolean;
}

export function Textarea({ label, optional, id, className = "", ...props }: TextareaProps) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={id} className="text-sm font-medium text-brand-text/90 flex justify-between">
                <span>{label}</span>
                {optional && <span className="text-brand-muted/50 font-normal text-xs">(Opsiyonel)</span>}
            </label>
            <textarea
                id={id}
                className={`w-full bg-brand-surface border border-brand-text/10 rounded-sm p-4 text-base md:text-sm text-brand-text placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors disabled:opacity-50 resize-y min-h-[100px] ${className}`}
                {...props}
            />
        </div>
    );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { value: string; label: string }[];
    placeholder?: string;
}

export function Select({ label, options, placeholder, id, className = "", ...props }: SelectProps) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={id} className="text-sm font-medium text-brand-text/90">
                {label}
            </label>
            <select
                id={id}
                className={`w-full bg-brand-surface border border-brand-text/10 rounded-sm px-4 py-3 min-h-[44px] text-base md:text-sm text-brand-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors disabled:opacity-50 cursor-pointer ${className}`}
                {...props}
            >
                {placeholder && <option value="" disabled className="text-brand-muted">{placeholder}</option>}
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-brand-surface-dark text-brand-text py-2">
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}