import React from "react";
import Accordion from "./Accordion";

function FAQ() {
	const faqData = [
		{
			question: "What is outreach AI?",
			answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto quis ex est doloribus facere nihil, dignissimos beatae odio corporis consectetur officiis rem non.",
		},
		{
			question: "What is AI personalization?",
			answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto quis ex est doloribus facere nihil, dignissimos beatae odio corporis consectetur officiis rem non.",
		},
		{
			question: "What's the impact of AI on prospecting?",
			answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto quis ex est doloribus facere nihil, dignissimos beatae odio corporis consectetur officiis rem non.",
		},
		{
			question: "Can AI replace human interaction in outreach?",
			answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto quis ex est doloribus facere nihil, dignissimos beatae odio corporis consectetur officiis rem non.",
		},
		{
			question: "How does AI improve outreach effectiveness?",
			answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto quis ex est doloribus facere nihil, dignissimos beatae odio corporis consectetur officiis rem non.",
		},
		{
			question: "What are the benefits of using AI in outreach?",
			answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto quis ex est doloribus facere nihil, dignissimos beatae odio corporis consectetur officiis rem non.",
		},
		{
			question: "Can AI help in optimizing outreach campaigns?",
			answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto quis ex est doloribus facere nihil, dignissimos beatae odio corporis consectetur officiis rem non.",
		},
		{
			question: "How to generate personalized campaigns with lemlist AI?",
			answer: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti architecto quis ex est doloribus facere nihil, dignissimos beatae odio corporis consectetur officiis rem non.",
		},
	];

	return (
		<section className="xl:w-[1150px] m-auto flex flex-col xl:flex-row gap-12 xl:gap-[112px] flex-wrap">
			<div>
				<h2 className="text-[56px] font-bold bg-gradient-to-br from-white via-gray-300 to-gray-600 text-transparent bg-clip-text inline-block">
					Frequently <br /> Asked <br /> Questions
				</h2>
			</div>

			<div className="xl:flex-1 flex flex-col gap-[16px] lg:pr-12">
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
