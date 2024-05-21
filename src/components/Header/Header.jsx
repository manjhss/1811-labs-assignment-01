import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { Menu } from "lucide-react";

const Header = () => {
	const navItems = [
		{
			name: "Products",
			slug: "/products",
		},
		{
			name: "About us",
			slug: "/about-us",
		},
		{
			name: "Pricing",
			slug: "/pricing",
		},
		{
			name: "FAQ",
			slug: "/faq",
		},
	];

	return (
		<header className="xl:w-[1440px] w-full h-[99.05px]">
			<nav className="h-full px-6 lg:px-[70px] flex justify-between items-center flex-wrap">
				<div className="flex items-center gap-3">
					<div className="lg:hidden">
						<Menu size={32} />
					</div>

					<div className="text-[24.94px] font-bold flex gap-1">
						<img src="/logo.svg" alt="logo" />
						<div>GenAI</div>
					</div>
				</div>

				<ul className="hidden lg:flex gap-[20px]">
					{navItems.map((item) => (
						<li
							key={item.name}
							className="p-[10px] text-[16px] font-medium"
						>
							<Link href={item.slug}>{item.name}</Link>
						</li>
					))}
				</ul>

				<Button>Get Started</Button>
			</nav>
		</header>
	);
};

export default Header;
