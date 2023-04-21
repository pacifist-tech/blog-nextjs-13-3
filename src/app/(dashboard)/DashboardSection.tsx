import { cn } from "@/utils/cn";
import React from "react";

const DashboardSection = ({
	className,
	children,
}: {
	className: string;
	children: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"flex items-center justify-center bg-[#0A1B48] h-full",
				className
			)}
		>
			{children}
		</div>
	);
};

export default DashboardSection;
