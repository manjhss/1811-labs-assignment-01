import React from "react";

function PriceCard({ index, title, description, price, services }) {
	const padding = index === 1 ? "p-[64px]" : "p-[32px]";
	const color = index === 1 ? "bg-[#706BFF] border-white/60" : "";

	return (
		<div
			className={`${padding} px-[32px] border-2 border-gray-600 rounded-2xl space-y-[24px]`}
		>
			<div className="space-y-[16px]">
				<h4 className="text-[32px] font-medium">{title}</h4>

				<p className="text-[20px] text-white/60">{description}</p>
			</div>

			<div className="text-[40px]">
				<span>$</span>
				<span className="font-bold">{price}</span>
			</div>

			<button
				className={`${color} px-[20px] py-[10px] border-2 rounded-xl text-[16px] font-medium w-full border-gray-600`}
			>
				Get Started
			</button>

			<ul className="text-[20px] text-white/60">
				{services?.map((service, index) => {
					const border = index === 3 ? "border-none" : "border-b";

					return (
						<li
							key={index}
							className={`${border} py-[20px] flex items-center gap-[16px]`}
						>
							<img src="/checkmark.png" alt="checkmark" />
							{service}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default PriceCard;
