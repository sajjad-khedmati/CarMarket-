import { useEffect } from "react";
// logo
import { UilStreering } from "@iconscout/react-unicons";

import { motion } from "framer-motion";

export default function SplashScreen({ setIsMountedFinish }) {
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setIsMountedFinish(true);
		}, 1500);

		return () => clearTimeout(timeOut);
	}, [setIsMountedFinish]);

	return (
		<section className="w-screen h-screen flex items-center justify-center">
			<motion.div
				initial={{ y: 30 }}
				animate={{ y: 0 }}
				exit={{ y: -30 }}
				transition={{ repeat: Infinity, duration: 1.5, type: "spring" }}
				className="flex items-center gap-2"
			>
				<div className="w-16 h-16">
					<UilStreering className="text-primary w-full h-full" />
				</div>
				<h1 className="text-5xl font-semibold tracking-wide">carline</h1>
			</motion.div>
		</section>
	);
}
