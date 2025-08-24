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

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="sticky top-0 z-10 bg-white shadow-sm dark:bg-gray-950">
				<div className="container mx-auto flex items-center justify-between px-4 py-4">
					<Link className="flex items-center gap-2" href="#">
						<Store className="text-primary h-6 w-6" />
						<span className="text-lg font-bold text-gray-900 dark:text-gray-50">Arsari-sari</span>
					</Link>
					<div className="relative max-w-[200px] flex-1 md:max-w-md">
						<Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
						<Input
							className="focus:border-primary focus:ring-primary w-full rounded-md border border-gray-200 bg-gray-100 py-2 pr-4 pl-10 text-sm focus:ring-1 focus:outline-none dark:border-gray-800 dark:bg-gray-800 dark:text-gray-50"
							placeholder="Search products..."
							type="search"
						/>
					</div>
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
				<section className="container mx-auto px-4 py-8">
					<h2 className="mb-4 text-xl font-bold">Categories</h2>
					<div className="grid grid-cols-4 place-items-center gap-x-2 gap-y-6">
						<div className="flex flex-col items-center gap-2">
							<Button
								className="bg-primary/10 text-primary h-16 w-16 rounded-full p-0 md:h-24 md:w-24"
								variant="ghost"
							>
								<UserStar className="size-8 md:size-12" />
							</Button>
							<span className="text-center text-base font-medium">Personal</span>
						</div>

						<div className="flex flex-col items-center gap-2">
							<Button
								className="bg-primary/10 text-primary h-16 w-16 rounded-full p-0 md:h-24 md:w-24"
								variant="ghost"
							>
								<Bubbles className="size-8 md:size-12" />
							</Button>
							<span className="text-center text-base font-medium">Cleaning</span>
						</div>

						<div className="flex flex-col items-center gap-2">
							<Button
								className="bg-primary/10 text-primary h-16 w-16 rounded-full p-0 md:h-24 md:w-24"
								variant="ghost"
							>
								<HeartPlus className="size-8 md:size-12" />
							</Button>
							<span className="text-center text-base font-medium">Health</span>
						</div>

						<div className="flex flex-col items-center gap-2">
							<Button
								className="bg-primary/10 text-primary h-16 w-16 rounded-full p-0 md:h-24 md:w-24"
								variant="ghost"
							>
								<NotebookPen className="size-8 md:size-12" />
							</Button>
							<span className="text-center text-base font-medium">School</span>
						</div>

						<div className="flex flex-col items-center gap-2">
							<Button
								className="bg-primary/10 text-primary h-16 w-16 rounded-full p-0 md:h-24 md:w-24"
								variant="ghost"
							>
								<CupSoda className="size-8 md:size-12" />
							</Button>
							<span className="text-center text-base font-medium">Beverages</span>
						</div>

						<div className="flex flex-col items-center gap-2">
							<Button
								className="bg-primary/10 text-primary h-16 w-16 rounded-full p-0 md:h-24 md:w-24"
								variant="ghost"
							>
								<Soup className="size-8 md:size-12" />
							</Button>
							<span className="text-center text-base font-medium">Noodles</span>
						</div>

						<div className="flex flex-col items-center gap-2">
							<Button
								className="bg-primary/10 text-primary h-16 w-16 rounded-full p-0 md:h-24 md:w-24"
								variant="ghost"
							>
								<Hamburger className="size-8 md:size-12" />
							</Button>
							<span className="text-center text-base font-medium">Snacks</span>
						</div>

						<div className="flex flex-col items-center gap-2">
							<Button
								className="bg-primary/10 text-primary h-16 w-16 rounded-full p-0 md:h-24 md:w-24"
								variant="ghost"
							>
								<Printer className="size-8 md:size-12" />
							</Button>
							<span className="text-center text-base font-medium">Printing</span>
						</div>
					</div>
				</section>
				<section className="container mx-auto px-4 py-8">
					<h2 className="mb-4 text-xl font-bold">Hot Items</h2>
					<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
						<Card>
							<CardContent className="flex flex-col items-center gap-4">
								<img
									alt="Product Image"
									className="rounded-t-lg"
									height={200}
									src="/placeholder.svg"
									style={{
										aspectRatio: "200/200",
										objectFit: "cover",
									}}
									width={200}
								/>
								<div className="flex-1">
									<h3 className="text-lg font-bold">Product Name</h3>
									<p className="text-gray-500 dark:text-gray-400">
										This is a short description of the product.
									</p>
									<div className="mt-4 flex items-center justify-between">
										<span className="text-lg font-bold">$19.99</span>
										<Button size="sm">Add to Cart</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>
				<section className="container mx-auto px-4 py-8">
					<h2 className="mb-4 text-xl font-bold">Inventory</h2>
					<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
						<Card>
							<CardContent className="flex flex-col items-center gap-4">
								<img
									alt="Product Image"
									className="rounded-t-lg"
									height={200}
									src="/placeholder.svg"
									style={{
										aspectRatio: "200/200",
										objectFit: "cover",
									}}
									width={200}
								/>
								<div className="flex-1">
									<h3 className="text-lg font-bold">Product Name</h3>
									<p className="text-gray-500 dark:text-gray-400">
										This is a short description of the product.
									</p>
									<div className="mt-4 flex items-center justify-between">
										<span className="text-lg font-bold">$19.99</span>
										<Button size="sm">Add to Cart</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>
			</main>
			<footer className="shadow-t sticky bottom-0 z-10 bg-white dark:bg-gray-950">
				<div className="container mx-auto flex items-center justify-around px-4 py-2">
					<Link className="text-primary flex flex-col items-center gap-1" href="/">
						<House className="h-6 w-6" />
						<span className="text-xs">Home</span>
					</Link>
					<Link
						className="hover:text-primary flex flex-col items-center gap-1 text-gray-500"
						href="/about"
					>
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
