"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

function Accordion({ question, answer }) {
	const [displayAnwser, setDisplayAnswer] = useState(false);

	return (
		<div className="px-[16px] pr-[48px] py-[25px] border rounded-xl space-y-6">
			<div className="text-[18px] font-medium flex justify-between">
				<div>{question}</div>
				<button onClick={() => setDisplayAnswer(!displayAnwser)}>
					{!displayAnwser ? <Plus /> : <Minus />}
				</button>
			</div>

			{displayAnwser && (
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Iste qui voluptatibus nam temporibus modi maiores provident
					beatae nisi voluptates tenetur repellendus, porro officia
					quibusdam.
				</p>
			)}
		</div>
	);
}

export default Accordion;
