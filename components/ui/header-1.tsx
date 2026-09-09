'use client';
import React from 'react';
import { motion } from 'motion/react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { createPortal } from 'react-dom';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{
			label: 'Stock Catalog',
			href: '#catalog',
		},
		{
			label: 'TikTok Updates',
			href: '#tiktok-section',
		},
		{
			label: 'Store Location',
			href: '#location-section',
		},
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
			className={cn(
				'sticky top-0 z-50 w-full border-b transition-colors duration-200',
				scrolled
					? 'bg-[#08090d]/95 backdrop-blur-md border-zinc-800/90 shadow-lg'
					: 'bg-[#08090d] border-zinc-850/80'
			)}
		>
			<nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
				<a href="#" className="hover:opacity-90 transition-opacity">
					<WordmarkIcon />
				</a>

				<div className="hidden items-center gap-6 md:flex">
					<div className="flex items-center gap-1">
						{links.map((link) => (
							<a
								key={link.label}
								className="text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-zinc-800/60 transition-colors"
								href={link.href}
							>
								{link.label}
							</a>
						))}
					</div>

					<a
						href="https://wa.me/923330952423"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2 text-xs font-bold shadow-md shadow-emerald-950/40 transition-all active:scale-95"
					>
						<svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
							<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
						</svg>
						<span>WhatsApp Order</span>
					</a>
				</div>

				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden border-zinc-700 bg-zinc-800/80 text-white hover:bg-zinc-700"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label="Toggle menu"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			<MobileMenu open={open} className="flex flex-col justify-between gap-4 bg-[#08090d] border-zinc-800 text-white p-6">
				<div className="grid gap-y-3">
					{links.map((link) => (
						<a
							key={link.label}
							onClick={() => setOpen(false)}
							className="text-sm font-semibold text-zinc-300 hover:text-white py-2 px-3 rounded-lg hover:bg-zinc-800/60"
							href={link.href}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="pt-4 border-t border-zinc-800">
					<a
						href="https://wa.me/923330952423"
						target="_blank"
						rel="noopener noreferrer"
						onClick={() => setOpen(false)}
						className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 text-sm font-bold shadow-md w-full"
					>
						<svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
							<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
						</svg>
						<span>Chat on WhatsApp</span>
					</a>
				</div>
			</MobileMenu>
		</motion.header>
	);
}

type MobileMenuProps = React.ComponentProps<'div'> & {
	open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
	if (!open || typeof window === 'undefined') return null;

	return createPortal(
		<div
			id="mobile-menu"
			className={cn(
				'bg-background/95 supports-[backdrop-filter]:bg-background/50 backdrop-blur-lg',
				'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y md:hidden',
			)}
		>
			<div
				data-slot={open ? 'open' : 'closed'}
				className={cn(
					'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
					'size-full p-4',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
}

export const WordmarkIcon = () => (
  <div className="flex flex-col justify-center leading-none select-none">
    <span
      className="text-base font-black tracking-tight uppercase text-white"
    >
      I SELL MOBILES
    </span>
    <span
      className="text-[10px] font-bold uppercase tracking-widest mt-1 text-emerald-400"
    >
      CIVIC TOWER • QUETTA
    </span>
  </div>
);
