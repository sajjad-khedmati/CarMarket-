import "@/styles/globals.css";

import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["300", "400", "500", "700", "900"],
	style: "normal",
	subsets: ["latin"],
});

import { AnimatePresence } from "framer-motion";

import Layout from "@/components/layout/Layout";

import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
	const router = useRouter();

	return (
		<AnimatePresence>
			{router.pathname === "/" || router.pathname === "/error" ? (
				<main className={roboto.className}>
					<Component {...pageProps} />
				</main>
			) : (
				<Layout>
					<main className={roboto.className}>
						<Component {...pageProps} />
					</main>
				</Layout>
			)}
		</AnimatePresence>
	);
}
