import React from "react";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

function HeroPage() {
	return (
		<section className="flex justify-between items-center gap-12 xl:gap-32 flex-col xl:flex-row px-6">
			<div className="space-y-[36px]">
				<div className="space-y-[36px] xl:pl-[124px]">
					<span className="px-[16px] py-[4px] text-[14px] bg-[#070825] rounded-full inline-flex items-center gap-2">
						AI generation <ArrowRight size={18} />
					</span>

					<h1 className="text-[70px] font-bold">
						Generate apps <br className="hidden xl:block" /> with
						ease
					</h1>

					<p className="text-[20px]">
						Lorem ipsum dolor sit amet lorem
					</p>

					<Button>Start your free trial</Button>
				</div>
			</div>

			<div>
				<div>
					<img
						src="/hero-primary-image.png"
						alt="hero-primary-image"
					/>
				</div>
			</div>
		</section>
	);
}

export default HeroPage;
