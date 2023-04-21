"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ModalSection = () => {
	const router = useRouter();
	return <button onClick={() => router.push("/secret")}>Click me</button>;
};

export default ModalSection;
