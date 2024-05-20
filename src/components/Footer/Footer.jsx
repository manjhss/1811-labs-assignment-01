import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Dribbble, Mail } from "lucide-react";

function Footer() {
	const navItems = [
		{
			name: "Home",
			slug: "/home",
		},
		{
			name: "Pricing",
			slug: "/pricing",
		},
		{
			name: "FAQ",
			slug: "/faq",
		},
		{
			name: "Changelog",
			slug: "/changelog",
		},
		{
			name: "License",
			slug: "/license",
		},
		{
			name: "Terms",
			slug: "/terms",
		},
		{
			name: "Contact",
			slug: "/contact",
		},
	];

	const socialLinks = [
		{
			element: <Twitter />,
			link: "",
		},
		{
			element: <Instagram />,
			link: "",
		},
		{
			element: <Dribbble />,
			link: "",
		},
		{
			element: <Mail />,
			link: "",
		},
	];

	return (
		<footer className="w-[1120px] mt-44 m-auto space-y-[34px]">
			<div className="flex justify-center gap-[24px]">
				{socialLinks.map((item, index) => (
					<button
						key={index}
						className="p-[18px] border border-white/60 rounded-full"
					>
						<Link href={item.link}>{item.element}</Link>
					</button>
				))}
			</div>

			<hr className="border-white/60" />

			<div className="pt-[49px] pb-[64px] space-y-[48px] flex flex-col items-center">
				<nav>
					<ul className="flex gap-[20px]">
						{navItems.map((item) => (
							<li
								key={item.name}
								className="p-[10px] text-[16px] text-white/60"
							>
								<Link href={item.slug}>{item.name}</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className="text-white/60 text-[16px]">
					&copy; 2020 – 2022 1811 Labs. All rights reserved.
				</div>
			</div>
		</footer>
	);
}

export default Footer;
