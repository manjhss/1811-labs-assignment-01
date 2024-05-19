import React from "react";
import Link from "next/link";
import Button from "@/components/Button";

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
		<header className="h-[99.05px]">
			<nav className="h-full px-[70px] flex justify-between items-center">
				<div className="text-[24.94px] font-bold flex gap-1">
					<img src="/logo.svg" alt="" />
					<div>GenAI</div>
				</div>

				<ul className="flex gap-[20px]">
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
