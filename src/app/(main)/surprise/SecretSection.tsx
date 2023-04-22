"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ModalSection = () => {
	const router = useRouter();

	return (
		<div className="flex flex-col">
			<Link href="/secret">Server side</Link>
			<button onClick={() => router.push("/secret")}>Client side</button>
		</div>
	);
};

export default ModalSection;
