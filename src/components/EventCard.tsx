import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { CommunityEvent } from "../types";

export default function EventCard({ event }: { event: CommunityEvent }) {
    return (
        <Link href={`/etkinlikler/${event.slug}`} className="group flex flex-col bg-brand-surface rounded-sm overflow-hidden border border-brand-text/5 hover:border-brand-text/20 transition-all cursor-pointer h-full relative">
            <div className="h-56 bg-brand-surface-lighter relative overflow-hidden border-b border-brand-text/5">
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                    <span className="bg-brand-bg/70 backdrop-blur-md text-brand-text text-[10px] font-mono px-3 py-1.5 rounded-sm uppercase tracking-widest">{event.date}</span>
                    <span className="bg-brand-primary/90 backdrop-blur-md text-brand-text text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-widest">{event.category}</span>
                </div>

                {event.image?.startsWith("/") ? (
                    <Image src={event.image} alt={event.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                    <>
                        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-brand-surface-lighter"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-brand-muted/20">
                            <ImageIcon size={32} />
                        </div>
                    </>
                )}
                <ArrowUpRight size={20} className="absolute top-4 right-4 text-brand-text opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-brand-bg/50 rounded-full p-2 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-brand-bg/10 z-10 pointer-events-none"></div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-brand-text leading-tight">{event.title}</h3>
                <p className="text-brand-muted text-sm line-clamp-2 mt-auto leading-relaxed">{event.summary}</p>
            </div>
        </Link>
    );
}
