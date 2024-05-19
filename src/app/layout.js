import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-[#090725] h-screen overflow-hidden`}>
				<div className="absolute top-0 -z-10 h-[1090px]">
					<img
						src="/hero-bg.png"
						alt="hero-bg"
						className="w-screen h-full"
					/>
				</div>

				<Header />
				{children}
			</body>
		</html>
	);
}
