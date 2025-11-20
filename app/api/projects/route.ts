import { NextResponse } from "next/server";

export async function GET() {
  // Simulate some processing time
  await new Promise((resolve) => setTimeout(resolve, 100));

  const projects = [
    {
      id: "6",
      logo: "/code-review-ai-logo.jpg",
      link: "#",
      comingSoon: true,
    },
    {
      id: "1",
      logo: "/cloud-sync-logo.jpg",
      link: "#",
      isNew: true,
      discountEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "2",
      logo: "/data-visualization-logo.png",
      link: "#",
      isNew: true,
      discountEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "3",
      logo: "/devops-tools-logo.jpg",
      link: "#",
      discount: 15,
    },
    {
      id: "4",
      logo: "/api-gateway-logo.jpg",
      link: "#",
      discount: 25,
    },
    {
      id: "5",
      logo: "/security-authentication-logo.jpg",
      link: "#",
      discount: 20,
    },
  ];

  return NextResponse.json(projects);
}

