import Link, { LinkProps } from "next/link";
import { ComponentProps, ReactNode } from "react";

interface CtaLinkProps extends LinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: ComponentProps<typeof Link>["onClick"];
}

export default function CtaLink({ href, children, className = "", onClick }: CtaLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`group relative inline-flex items-center justify-center gap-2 bg-brand-text text-brand-bg rounded-sm text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-brand-muted hover:-translate-y-0.5 active:translate-y-0 active:scale-95 ${className}`}
        >
            {children}
        </Link>
    );
}
