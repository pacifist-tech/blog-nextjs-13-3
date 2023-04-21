import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-white  text-[#593AC4] min-h-screen flex items-center justify-center">
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-4xl font-semibold mb-3">Pacifist</h1>
				<ul className="flex gap-6">
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/blog/1">Blog 1</Link>
					</li>
					<li>
						<Link href="/blog/1">Blog 2</Link>
					</li>
				</ul>
			</div>
		</main>
	);
}
