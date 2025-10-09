// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

/**
 * Send subscription email via backend API
 * @param userEmail - The email address of the subscriber
 * @returns Promise with email sending result
 */
export const sendSubscriptionEmail = async (userEmail: string): Promise<EmailResponse> => {
  try {
    // Validate email
    if (!userEmail || !isValidEmail(userEmail)) {
      return {
        success: false,
        message: 'Please provide a valid email address',
      };
    }

    const response = await fetch(`${API_BASE_URL}/api/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: data.message || 'Thank you for subscribing! Please check your email for confirmation.',
      };
    } else {
      return {
        success: false,
        message: data.error || 'Failed to send confirmation email. Please try again later.',
      };
    }
  } catch (error) {
    console.error('Failed to send subscription email:', error);
    
    // Handle network errors
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        message: 'Unable to connect to server. Please check your internet connection and try again.',
      };
    }
    
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
};

/**
 * Validate email format
 * @param email - Email address to validate
 * @returns boolean indicating if email is valid
 */
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Check if backend API is available
 * @returns Promise<boolean> indicating if API is reachable
 */
export const checkApiHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    return response.ok;
  } catch (error) {
    console.error('API health check failed:', error);
    return false;
  }
};