"use client";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ end, suffix = "" }: { end: number, suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
        });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 2000;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) { setCount(end); clearInterval(timer); }
                else { setCount(Math.floor(start)); }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [inView, end]);

    return <span ref={ref} className="text-4xl font-bold text-brand-text">{count}{suffix}</span>;
}
