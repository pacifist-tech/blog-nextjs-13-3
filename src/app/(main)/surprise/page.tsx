import Link from "next/link";
import React from "react";
import SecretSection from "./SecretSection";

const AboutPage = () => {
	return (
		<section className="flex flex-col justify-center items-center">
			<h1>Surprise Page</h1>
			<SecretSection></SecretSection>
		</section>
	);
};

export default AboutPage;
