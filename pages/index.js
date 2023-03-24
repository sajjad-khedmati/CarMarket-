import GetStarted from "@/components/templates/getStarted";
import SplashScreen from "@/components/templates/SplashScreen";
import { useState } from "react";

export default function Home() {
	const [isMountedFinish, setIsMountedFinish] = useState(false);

	return isMountedFinish ? (
		<GetStarted />
	) : (
		<SplashScreen setIsMountedFinish={setIsMountedFinish} />
	);
}
