import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pacifist Blog Nextjs 13.3",
	description: "For display purpose only",
	metadataBase: new URL("https://pacifist.id"),
};

const font = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--sans-font",
});

export default function Layout({
	children,
	user,
	admin,
}: {
	children: React.ReactNode;
	user: React.ReactNode;
	admin: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body style={{ ...font.style }}>
				<main className="bg-slate-900 grid grid-cols-3  text-white min-h-screen  items-center justify-center">
					{user}
					{children}
					{admin}
				</main>
			</body>
		</html>
	);
}
