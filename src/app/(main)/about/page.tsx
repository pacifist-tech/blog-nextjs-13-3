import Link from "next/link";
import React from "react";

const AboutPage = () => {
	return (
		<section className="flex flex-col justify-center items-center">
			<h1>About Page </h1>
			<Link href="/">Home</Link>
		</section>
	);
};

export default AboutPage;
