import React from "react";

function Button({ children }) {
	return (
		<button className="px-[24px] py-[12px] text-[14px] font-bold bg-[#706BFF] border border-white/60 rounded-full">
			{children}
		</button>
	);
}

export default Button;
