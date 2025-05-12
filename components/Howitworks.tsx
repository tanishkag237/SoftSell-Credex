"use client";

import { ChartNoAxesCombined, DollarSign, FileUp, HandCoins } from "lucide-react";
import { HoverEffect } from "./ui/card-hover-effect";
import { Cover } from "./ui/cover";

export function Howitworks() {
	return (
		<>
		
			<div className="max-w-5xl mx-auto px-8 sm:text-[20px] text-[16px] md:text-[18px] " id="how-it-works">
				 <h1 className=" text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white ">
				   <Cover>  How it Works !</Cover>
			</h1>
			<HoverEffect items={projects} />
		</div>
		</>
		
	);
}

export const projects = [
	{
		title: "Upload License",
		icon: <FileUp size={50} />,
	},
	{
		title: "Get Valuation",
		icon: <ChartNoAxesCombined  size={50} />
	},
	{
		title: "Get Paid",
		icon: <HandCoins size={50}/>,
	},
];
