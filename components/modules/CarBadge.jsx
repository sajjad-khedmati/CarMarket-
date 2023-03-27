import Image from "next/image";
import React from "react";

export default function CarBadge({ title, icon }) {
	return (
		<div className="border-2 min-w-max border-slate-100 rounded-2xl px-2 py-1 flex items-center gap-2">
			<Image src={icon} alt={title} width={40} height={40} />
			<span className="text-sm">{title}</span>
		</div>
	);
}
