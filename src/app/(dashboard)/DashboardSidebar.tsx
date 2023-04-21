import React from "react";

const DashboardSidebar = () => {
	return (
		<aside className="bg-white h-screen pl-20 pr-36 py-20">
			<ul className="flex flex-col gap-6 font-light  text-light">
				<li>Home</li>
				<li>Item</li>
				<li>User</li>
				<li className="underline text-heavy font-medium">Setting</li>
			</ul>
		</aside>
	);
};

export default DashboardSidebar;
