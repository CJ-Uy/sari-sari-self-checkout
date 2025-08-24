import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
	Store,
	Search,
	ShoppingCart,
	UserStar,
	Bubbles,
	HeartPlus,
	NotebookPen,
	CupSoda,
	Soup,
	Hamburger,
	House,
	BadgeInfo,
	Phone,
	Printer,
} from "lucide-react";

export default function Page() {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="sticky top-0 z-10 bg-white shadow-sm dark:bg-gray-950">
				<div className="container mx-auto flex items-center justify-between px-4 py-4">
					<Link className="flex items-center gap-2" href="#">
						<Store className="text-primary h-6 w-6" />
						<span className="text-lg font-bold text-gray-900 dark:text-gray-50">Arsari-sari</span>
					</Link>
				</div>
			</header>
			<main className="flex-1">
				<div className="fixed right-5 bottom-20 z-15">
					<div className="flex flex-col items-center gap-2">
						<Button
							className="bg-secondary/80 hover:bg-secondary text-secondary-foreground hover:text-secondary-foreground h-16 w-16 rounded-full p-0 md:h-24 md:w-24"
							variant="ghost"
						>
							<ShoppingCart className="size-8 md:size-12" />
						</Button>
					</div>
				</div>
			</main>
			<footer className="shadow-t sticky bottom-0 z-10 bg-white dark:bg-gray-950">
				<div className="container mx-auto flex items-center justify-around px-4 py-2">
					<Link
						className="hover:text-primary flex flex-col items-center gap-1 text-gray-500"
						href="/"
					>
						<House className="h-6 w-6" />
						<span className="text-xs">Home</span>
					</Link>
					<Link className="text-primary flex flex-col items-center gap-1" href="/about">
						<BadgeInfo className="h-6 w-6" />
						<span className="text-xs">About</span>
					</Link>
					<Link
						className="hover:text-primary flex flex-col items-center gap-1 text-gray-500"
						href="/contact-us"
					>
						<Phone className="h-6 w-6" />
						<span className="text-xs">Contact</span>
					</Link>
				</div>
			</footer>
		</div>
	);
}
