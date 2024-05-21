import React from "react";
import PriceCard from "./PriceCard";

function Pricing() {
	const pricingData = [
		{
			title: "Basic",
			description: "AI chatbot, personlized recommendations",
			price: "0",
			services: [
				"Type of thread",
				"Online presence",
				"Access to all modules",
				"Notability",
			],
		},
		{
			title: "Premium",
			description: "AI chatbot, personlized recommendations",
			price: "9.99",
			services: [
				"Type of thread",
				"Online presence",
				"Access to all modules",
				"Notability",
			],
		},
		{
			title: "Enterprise",
			description: "AI chatbot, personlized recommendations",
			price: "20.99",
			services: [
				"Type of thread",
				"Online presence",
				"Access to all modules",
				"Notability",
			],
		},
	];

	return (
		<section className="xl:w-[1174px] m-auto space-y-[80px]">
			<div className="space-y-[24px] flex flex-col justify-center">
				<h2 className="text-[56px] font-bold text-center bg-gradient-to-br from-white via-gray-300 to-gray-600 text-transparent bg-clip-text inline-block">
					Get everything to build your app
				</h2>
			</div>

			<div className="grid md:grid-cols-2 xl:grid-cols-3 xl:place-items-center gap-[24px]">
				{pricingData.map((data, index) => (
					<PriceCard
						key={index}
						index={index}
						title={data.title}
						description={data.description}
						price={data.price}
						services={data.services}
					/>
				))}
			</div>
		</section>
	);
}

export default Pricing;
