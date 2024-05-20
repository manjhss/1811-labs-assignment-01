import React from "react";

function Unleash() {
	return (
		<section className="w-[1150px] m-auto space-y-[80px] flex flex-col items-center">
			<div className="space-y-[24px] flex flex-col justify-center">
				<h2 className="text-[56px] font-bold text-center bg-gradient-to-br from-white via-gray-300 to-gray-600 text-transparent bg-clip-text inline-block">
					Unleash the <br /> power of AI
				</h2>

				<p className="text-[24px] text-center">
					Automatically generate high-quality sequences uniquely
					crafted <br /> for your value proposition and your target
					prospects.
				</p>
			</div>

			<div className="w-[926px] p-[50px] pb-[64px] border rounded-xl space-y-[50px]">
				<div className="text-[40px] font-semibold  bg-gradient-to-br from-white via-gray-300 to-gray-600 text-transparent bg-clip-text inline-block">
					Results from outreach
				</div>

				<div className="space-y-[20px]">
					<div className="text-[32px] font-semibold flex items-center gap-[30px]">
						<div className="bg-red-500/40 px-[25px] py-[11px] rounded-xl border border-red-500">
							without AI
						</div>
						<span className=" bg-gradient-to-br from-white via-gray-300 to-gray-600 text-transparent bg-clip-text inline-block">
							5% reply rate
						</span>
					</div>

					<div className="text-[32px] font-semibold flex items-center gap-[30px]">
						<div className="bg-blue-500/40 px-[25px] py-[11px] rounded-xl border border-blue-500 flex-1">
							with AI
						</div>
						<span className=" bg-gradient-to-br from-white via-gray-300 to-gray-600 text-transparent bg-clip-text inline-block">
							15% reply rate
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Unleash;
