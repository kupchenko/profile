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
      logo: "/projects/healthy-family-logo.png",
      link: "https://myfamily.health",
      comingSoon: true,
    },
    {
      id: "3",
      name: "Ask Expert",
      logo: "/projects/ask-expert-logo.png",
      link: null,
      comingSoon: true,
    },
    {
      id: "4",
      name: "GlowBook",
      logo: "/projects/glowbook-logo.png",
      link: null,
      comingSoon: true,
    },
    {
      id: "5",
      name: "Fluentia",
      logo: "/projects/fluentia-logo.png",
      link: null,
      comingSoon: true,
    },
  ];

  return NextResponse.json(projects);
}

