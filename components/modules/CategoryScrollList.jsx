import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

import carCategories from "../../data/carCategories";
import CarBadge from "./CarBadge";

export default function CategoryScrollList() {
	const [scrollStart, setScrollStart] = useState(false);

	return (
		<>
			<ScrollContainer
				vertical={false}
				activationDistance={40}
				className="duration-300 rounded-2xl transition-all mt-4 py-4 flex gap-2"
				onStartScroll={() => setScrollStart(true)}
				onEndScroll={() => setScrollStart(false)}
			>
				{carCategories.map((item) => (
					<CarBadge key={item.id} title={item.title} icon={item.icon} />
				))}
			</ScrollContainer>

			<div className="flex w-full justify-center gap-1">
				<span
					className={`h-1 rounded-full bg-slate-500 transition-all duration-300 ${
						scrollStart ? "w-2" : "w-4"
					}`}
				></span>
				<span
					className={`h-1 rounded-full bg-slate-500 transition-all duration-300 ${
						scrollStart ? "w-4" : "w-2"
					}`}
				></span>
			</div>
		</>
	);
}
