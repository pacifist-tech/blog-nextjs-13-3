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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body style={{ ...font.style }}>
				<main className="bg-white  text-[#593AC4] min-h-screen flex items-center justify-center">
					{children}
				</main>
			</body>
		</html>
	);
}
