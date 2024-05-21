"use client";
import React, { useState } from "react";
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

	const [showNavMenu, setShowNavMenu] = useState(false);

	return (
		<header className="xl:w-[1440px] w-full h-[99.05px]">
			<nav className="h-full px-6 lg:px-[70px] flex justify-between items-center flex-wrap">
				<div className="flex items-center gap-3">
					<div className="lg:hidden relative">
						<div
							className="cursor-pointer"
							onClick={() => setShowNavMenu(!showNavMenu)}
						>
							<Menu size={32} />
						</div>

						{showNavMenu && (
							<nav className="absolute top-12 left-0 bg-[#706BFF] border rounded-xl overflow-hidden">
								<ul className="lg:flex gap-[20px]">
									{navItems.map((item) => (
										<li
											key={item.name}
											className="p-[10px] text-[16px] font-medium hover:bg-white/15 cursor-pointer pr-24"
											onClick={() =>
												setShowNavMenu(!showNavMenu)
											}
										>
											<Link href={item.slug}>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						)}
					</div>

					<a href="/">
						<div className="text-[24.94px] font-bold flex gap-1">
							<img src="/logo.svg" alt="logo" />
							<div>GenAI</div>
						</div>
					</a>
				</div>

				<ul className="hidden lg:flex gap-[20px]">
					{navItems.map((item) => (
						<li
							key={item.name}
							className="p-[10px] cursor-pointer text-[16px] font-medium"
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
