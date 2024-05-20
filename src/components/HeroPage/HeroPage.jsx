import React from "react";
import Button from "@/components/Button";

function HeroPage() {
	return (
		<section id="hero" className="flex justify-between items-center">
			<div className="space-y-[36px] pl-[124px]">
				<div className="space-y-[36px]">
					<span className="px-[16px] py-[4px] text-[14px] bg-[#070825] rounded-full">
						AI generation
					</span>

					<h1 className="text-[70px] font-bold">
						Generate apps <br /> with ease
					</h1>

					<p className="text-[20px]">
						Lorem ipsum dolor sit amet lorem
					</p>
				</div>

				<Button>Start your free trial</Button>
			</div>

			<div>
				<dir>
					<img
						src="/hero-primary-image.png"
						alt="hero-primary-image"
					/>
				</dir>
			</div>
		</section>
	);
}

export default HeroPage;
