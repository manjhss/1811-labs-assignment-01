import React from "react";
import Button from "@/components/Button";

function FuturePage() {
	return (
		<section className="w-[1150px] m-auto flex flex-col items-center">
			<div className="space-y-[24px] flex flex-col items-center justify-center">
				<h2 className="text-[56px] font-bold text-center">
					Be part of the future of <br /> <span>AI tools</span>
				</h2>

				<p className="text-[24px] text-center">
					Unleash the power of AI within Brainwave. Upgrade your
					productivity <br /> with Brainwave, the open AI chat app.
				</p>
			</div>

			<div className="mt-20">
				<Button>Start your free trial</Button>
			</div>
		</section>
	);
}

export default FuturePage;
