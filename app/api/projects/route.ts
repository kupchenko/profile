import { NextResponse } from "next/server";

export async function GET() {
  // Simulate some processing time
  await new Promise((resolve) => setTimeout(resolve, 100));

  const projects = [
    {
      id: "1",
      name: "Superagent AI",
      logo: "/projects/superagent-logo.svg",
      link: "https://getsuperagent.com",
      isNew: true,
    },
    {
      id: "2",
      name: "Healthy Family",
      logo: "/projects/cloud-sync-logo.jpg",
      link: "#",
      comingSoon: true,
    },
    {
      id: "3",
      name: "Ask Expert",
      logo: "/projects/data-visualization-logo.png",
      link: "#",
      comingSoon: true,
    },
    {
      id: "4",
      name: "GlowBook",
      logo: "/projects/devops-tools-logo.jpg",
      link: "#",
      comingSoon: true,
    },
    {
      id: "5",
      name: "Fluentia",
      logo: "/projects/api-gateway-logo.jpg",
      link: "#",
      comingSoon: true,
    },
    {
      id: "6",
      name: "FitTrack Pro",
      logo: "/projects/security-authentication-logo.jpg",
      link: "#",
      comingSoon: true,
    },
  ];

  return NextResponse.json(projects);
}

