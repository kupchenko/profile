// API client for making HTTP requests

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

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

// API: Get available dates for booking
export async function getAvailableDates(): Promise<AvailableDate[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/available-dates`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching available dates:", error);
    throw error;
  }
}

// API: Get available time slots for a specific date
export async function getTimeSlots(date: string): Promise<string[]> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/time-slots?date=${encodeURIComponent(date)}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.timeSlots;
  } catch (error) {
    console.error("Error fetching time slots:", error);
    throw error;
  }
}

// API: Get projects data
export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/projects`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Convert date strings back to Date objects
    return data.map((project: any) => ({
      ...project,
      discountEndDate: project.discountEndDate
        ? new Date(project.discountEndDate)
        : undefined,
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
}

// API: Book a call
export async function bookCall(data: {
  date: string;
  time: string;
  email?: string;
}): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/book-call`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || `HTTP error! status: ${response.status}`);
    }

    return result;
  } catch (error) {
    console.error("Error booking call:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to book call",
    };
  }
}

// API: Submit contact form
export async function submitContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || `HTTP error! status: ${response.status}`);
    }

    return result;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to send message",
    };
  }
}

