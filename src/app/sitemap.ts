import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://pacifist.id",
			lastModified: new Date(),
		},
		{
			url: "https://pacifist.id/about",
			lastModified: new Date(),
		},
		{
			url: "https://pacifist.id/blog",
			lastModified: new Date(),
		},
	];
}
