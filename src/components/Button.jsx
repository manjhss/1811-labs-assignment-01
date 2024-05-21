import React from "react";
import { ArrowRight } from "lucide-react";

function Button({ className, children }) {
	return (
		<button
			className={`${className} px-[24px] py-[12px] text-[14px] font-bold bg-[#706BFF] border border-white/60 rounded-full flex items-center gap-2 hover:gap-4`}
		>
			{children} <ArrowRight />
		</button>
	);
}

export default Button;
