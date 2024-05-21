"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

function Accordion({ question, answer }) {
	const [displayAnwser, setDisplayAnswer] = useState(false);

	return (
		<div className="px-[16px] pr-[48px] py-[25px] border-2 border-slate-400/20 rounded-xl space-y-6">
			<div className="text-[18px] font-medium flex justify-between gap-2">
				<div>{question}</div>
				<button onClick={() => setDisplayAnswer(!displayAnwser)}>
					{!displayAnwser ? <Plus /> : <Minus />}
				</button>
			</div>

			{displayAnwser && <p className="text-white/60">{answer}</p>}
		</div>
	);
}

export default Accordion;
