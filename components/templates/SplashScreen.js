import { useEffect } from "react";
// logo
import { UilStreering } from "@iconscout/react-unicons";

export default function SplashScreen({ setIsMountedFinish }) {
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setIsMountedFinish(true);
		}, 1500);

		return () => clearTimeout(timeOut);
	}, [setIsMountedFinish]);

	return (
		<section className="w-screen h-screen flex items-center justify-center">
			<div className="flex items-center gap-2 animate-bounce">
				<div className="w-16 h-16">
					<UilStreering className="text-primary w-full h-full" />
				</div>
				<h1 className="text-5xl font-semibold tracking-wide">carline</h1>
			</div>
		</section>
	);
}
