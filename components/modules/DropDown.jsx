import { UilAngleDown } from "@iconscout/react-unicons";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function DropDown({ options }) {
	const [openOption, setOpenOption] = useState(false);
	const [activeOption, setActiveOption] = useState(options[0]);

	const wrapperRef = useRef(null);

	useEffect(() => {
		if (!openOption) return;
		const handleClickOutside = (event) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setOpenOption(false);
			}
		};
		document.addEventListener("click", handleClickOutside);

		return () => document.removeEventListener("click", handleClickOutside);
	}, [openOption]);

	return (
		<div
			ref={wrapperRef}
			className="relative"
			onClick={() => setOpenOption(!openOption)}
		>
			<div className="w-40 px-4 py-2 border-2 border-slate-100 rounded-2xl flex items-center justify-between">
				<span>{activeOption}</span>
				<UilAngleDown className="h-full w-auto" />
			</div>
			{openOption && (
				<motion.ul
					initial={{ scale: 0.7 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0.7 }}
					className="absolute top-12 right-0 left-0 z-50 bg-slate-100 rounded-2xl p-1 flex flex-col gap-2"
				>
					{options.map((item) => (
						<li
							key={item}
							onClick={() => setActiveOption(item)}
							className={`hover:bg-slate-200 ${
								activeOption === item && "bg-slate-200"
							} cursor-pointer transition-all duration-300 px-4 py-3 rounded-2xl`}
						>
							{item}
						</li>
					))}
				</motion.ul>
			)}
		</div>
	);
}
