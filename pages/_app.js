import "@/styles/globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["300", "400", "500", "700", "900"],
	style: "normal",
	subsets: ["latin"],
});

import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
	return (
		<AnimatePresence>
			<main className={roboto.className}>
				<Component {...pageProps} />
			</main>
		</AnimatePresence>
	);
}
