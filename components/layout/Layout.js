import BottomNavigation from "../modules/BottomNavigation";

export default function Layout({ children }) {
	return (
		<section className="w-screen h-screen relative flex flex-col items-center">
			{children}
			<BottomNavigation />
		</section>
	);
}
