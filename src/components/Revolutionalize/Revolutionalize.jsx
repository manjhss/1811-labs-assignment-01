import React from "react";

function Revolutionalize() {
	return (
		<section className="xl:w-[1150px] m-auto">
			<div className="space-y-[24px] flex flex-col justify-center mb-44 lg:mb-0">
				<h2 className="text-[46px] sm:text-[56px] font-bold text-center bg-gradient-to-br from-white via-gray-300 to-gray-600 text-transparent bg-clip-text inline-block">
					Revolutionalize your <br className="hidden xl:block" />{" "}
					workflow
				</h2>

				<p className="text-[24px] text-center">
					Generate highly personalized icebreakers and complete <br />
					sequences based on your prospects' information.
				</p>
			</div>

			<div className="grid gap-8 lg:gap-24 lg:grid-cols-2 mt-20 place-items-center lg:place-items-end">
				<div className="relative -top-24 flex justify-center items-stretch">
					<div className="w-[88%]">
						<img src="/user-acc-card.png" alt="user-card" />
					</div>

					<div className="absolute top-6 w-[94%]">
						<img src="/user-acc-card.png" alt="user-card" />
					</div>

					<div className="absolute top-12">
						<img src="/user-acc-card.png" alt="user-card" />
					</div>
				</div>

				<div className="space-y-[32px] p-[22px] lg:px-[39px] lg:py-[48px] border-2 border-slate-400/20 rounded-2xl sm:w-[540px] lg:w-[440px] xl:w-[500px]">
					<h4 className="text-[32px] font-semibold">
						Generate AI apps without any extra effort
					</h4>

					<p className="text-[16px] leading-7 text-white/75">
						Our world-class market making services are proven to
						help local and emerging exchanges win traders and gain
						market-leading positions of up to 90% market dominance.{" "}
						<br /> <br /> Lorem ipsum dolor sit amet with the one
						and only ai apps that you like lorem ipsum dolor sit
						amet lorem ipsum dolor sit amet lorem ipsum dolor sit
						amet lorem ipsum dolor sit amet.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Revolutionalize;
