import { NextResponse } from "next/server";

export async function GET() {
  // Simulate some processing time
  await new Promise((resolve) => setTimeout(resolve, 100));

  const projects = [
    {
      id: "6",
      name: "Superagent AI",
      logo: "/projects/superagent-logo.svg",
      link: "https://getsuperagent.com",
      isNew: true,
    },
    {
      id: "1",
      name: "CloudSync Pro",
      logo: "/projects/cloud-sync-logo.jpg",
      link: "#",
      isNew: true,
      discountEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "2",
      name: "DataViz Studio",
      logo: "/projects/data-visualization-logo.png",
      link: "#",
      isNew: true,
      discountEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: "3",
      name: "DevOps Toolkit",
      logo: "/projects/devops-tools-logo.jpg",
      link: "#",
      discount: 15,
    },
    {
      id: "4",
      name: "API Gateway Hub",
      logo: "/projects/api-gateway-logo.jpg",
      link: "#",
      discount: 25,
    },
    {
      id: "5",
      name: "SecureAuth",
      logo: "/projects/security-authentication-logo.jpg",
      link: "#",
      discount: 20,
    },
  ];

  return NextResponse.json(projects);
}

