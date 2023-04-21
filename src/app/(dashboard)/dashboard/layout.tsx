import { Poppins } from "next/font/google";
import "@/app/globals.css";
import { Metadata } from "next";
import DashboardSidebar from "../DashboardSidebar";

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

export default async function Layout({
	children,
	user,
	admin,
}: {
	children: React.ReactNode;
	user: React.ReactNode;
	admin: React.ReactNode;
}) {
	const isAdmin = await getAdmin();
	return (
		<html lang="en">
			<body style={{ ...font.style }}>
				<main className="bg-slate-900 flex text-heavy min-h-screen ">
					<DashboardSidebar />
					{isAdmin ? admin : user}
				</main>
			</body>
		</html>
	);
}

async function getAdmin() {
	return Math.random() > 0.5;
}
