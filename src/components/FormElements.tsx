import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from "react";

interface FormBaseProps {
    label: string;
    optional?: boolean;
}

export function Input({ label, optional, className = "", id, ...props }: FormBaseProps & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            <label htmlFor={id} className="text-xs font-semibold text-brand-muted/80">
                {label} {!optional && <span className="text-brand-error">*</span>}
                {optional && <span className="text-brand-muted/50 font-normal ml-1">(Opsiyonel)</span>}
            </label>
            <input
                {...props}
                id={id}
                required={!optional}
                className={`w-full bg-brand-surface border border-brand-text/10 p-3.5 text-sm text-brand-text focus:outline-none focus:border-brand-primary transition-colors rounded-sm placeholder:text-brand-muted/30 disabled:opacity-50 ${className}`}
            />
        </div>
    );
}

export function Textarea({ label, optional, className = "", id, ...props }: FormBaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            <label htmlFor={id} className="text-xs font-semibold text-brand-muted/80">
                {label} {!optional && <span className="text-brand-error">*</span>}
                {optional && <span className="text-brand-muted/50 font-normal ml-1">(Opsiyonel)</span>}
            </label>
            <textarea
                {...props}
                id={id}
                required={!optional}
                className={`w-full bg-brand-surface border border-brand-text/10 p-4 text-sm text-brand-text focus:outline-none focus:border-brand-primary transition-colors rounded-sm resize-none placeholder:text-brand-muted/30 disabled:opacity-50 ${className}`}
            />
        </div>
    );
}

interface SelectProps extends FormBaseProps, SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string; label: string }[];
    placeholder?: string;
}

export function Select({ label, optional, options, placeholder = "Seçiniz", className = "", id, ...props }: SelectProps) {
    return (
        <div className="flex flex-col gap-1.5 w-full relative">
            <label htmlFor={id} className="text-xs font-semibold text-brand-muted/80">
                {label} {!optional && <span className="text-brand-error">*</span>}
            </label>
            <select
                {...props}
                id={id}
                required={!optional}
                className={`w-full bg-brand-surface border border-brand-text/10 p-3.5 text-sm text-brand-text focus:outline-none focus:border-brand-primary transition-colors appearance-none cursor-pointer rounded-sm disabled:opacity-50 ${className}`}
            >
                <option value="" disabled>{placeholder}</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            <div className="absolute right-4 top-[38px] pointer-events-none text-brand-muted/50 text-xs">▼</div>
        </div>
    );
}
