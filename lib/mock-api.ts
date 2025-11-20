// Mock API for dynamic data

export interface AvailableDate {
  date: string;
  day: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Project {
  id: string;
  logo: string;
  link: string;
  comingSoon?: boolean;
  isNew?: boolean;
  discountEndDate?: Date;
  discount?: number;
}

// Mock API: Get available dates for booking
export async function getAvailableDates(): Promise<AvailableDate[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    { date: "2025-01-22", day: "Wed" },
    { date: "2025-01-23", day: "Thu" },
    { date: "2025-01-27", day: "Mon" },
    { date: "2025-01-29", day: "Wed" },
    { date: "2025-01-30", day: "Thu" },
    { date: "2025-02-03", day: "Mon" },
    { date: "2025-02-05", day: "Wed" },
    { date: "2025-02-06", day: "Thu" },
    { date: "2025-02-10", day: "Mon" },
    { date: "2025-02-12", day: "Wed" },
  ];
}

// Mock API: Get available time slots for a specific date
export async function getTimeSlots(date: string): Promise<string[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return ["9:00 AM", "10:30 AM", "1:00 PM", "3:30 PM", "5:00 PM"];
}

// Mock API: Get projects data
export async function getProjects(): Promise<Project[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
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
      discountEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
    {
      id: "2",
      logo: "/data-visualization-logo.png",
      link: "#",
      isNew: true,
      discountEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
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
}

// Mock API: Book a call
export async function bookCall(data: {
  date: string;
  time: string;
  email?: string;
}): Promise<{ success: boolean; message: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log("Booking call:", data);

  return {
    success: true,
    message: "Call booked successfully!",
  };
}

// Mock API: Submit contact form
export async function submitContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; message: string }> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log("Contact form submitted:", data);

  return {
    success: true,
    message: "Message sent successfully!",
  };
}

