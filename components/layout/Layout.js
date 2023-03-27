import BottomNavigation from "../modules/BottomNavigation";

export default function Layout({ children }) {
	return (
		<section className="w-screen h-screen relative">
			{children}
			<BottomNavigation />
		</section>
	);
}
