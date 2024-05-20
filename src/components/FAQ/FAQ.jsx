import React from "react";
import Accordion from "./Accordion";

function FAQ() {
	const faqData = [
		{
			question: "What is outreach AI?",
			answer: "",
		},
		{
			question: "What is AI personalization?",
			answer: "",
		},
		{
			question: "What's the impact of AI on prospecting?",
			answer: "",
		},
		{
			question: "Can AI replace human interaction in outreach?",
			answer: "",
		},
		{
			question: "How does AI improve outreach effectiveness?",
			answer: "",
		},
		{
			question: "What are the benefits of using AI in outreach?",
			answer: "",
		},
		{
			question: "Can AI help in optimizing outreach campaigns?",
			answer: "",
		},
		{
			question: "How to generate personalized campaigns with lemlist AI?",
			answer: "",
		},
	];

	return (
		<section className="w-[1150px] m-auto flex gap-[112px] items-start">
			<div className="space-y-[24px] flex flex-col justify-center">
				<h2 className="text-[56px] font-bold bg-gradient-to-br from-white via-gray-300 to-gray-600 text-transparent bg-clip-text inline-block">
					Frequently <br /> Asked <br /> Questions
				</h2>
			</div>

			<div className="flex-1 flex flex-col gap-[16px]">
				{faqData.map((data, index) => (
					<Accordion
						key={index}
						question={data.question}
						answer={data.answer}
					/>
				))}
			</div>
		</section>
	);
}

export default FAQ;
