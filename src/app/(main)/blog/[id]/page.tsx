import Link from "next/link";
import React from "react";

const BlogPage = ({ params }: { params: { id: string } }) => {
	return (
		<section className="flex flex-col justify-center items-center">
			<h1>Blog {params.id}</h1>
			<Link href="/">Home</Link>
		</section>
	);
};

export async function generateStaticParams() {
	const posts = ["1", "2"];

	return posts.map((id) => ({
		id,
	}));
}

export default BlogPage;
