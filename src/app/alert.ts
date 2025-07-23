export const ERROR_MESSAGES = {
  REQUIRED_FIELDS: { message: "Please fill in all required fields.", type: "warning" },
  INVALID_EMAIL: { message: "Please enter a valid email address.", type: "error" },
  INVALID_PASSWORD: { message: "Password must meet the required criteria.", type: "warning" },
  USERNAME_EXISTS: { message: "Username already exists. Please choose another.", type: "error" },
  EMAIL_EXISTS: { message: "Email already registered. Please use another email.", type: "error" },
  USER_NOT_FOUND: { message: "No account found with this email.", type: "error" },
  WRONG_PASSWORD: { message: "Incorrect password. Please try again.", type: "error" },
  NETWORK_ERROR: { message: "Network error. Please try again later.", type: "error" },
  SERVER_ERROR: { message: "Server error. Please try again later.", type: "error" },
  UNAUTHORIZED: { message: "You are not authorized to perform this action.", type: "error" },
  TOO_MANY_ATTEMPTS: { message: "Too many login attempts. Please wait and try again.", type: "warning" },
  ACCOUNT_LOCKED: { message: "Your account has been locked. Contact support.", type: "error" },
  WEAK_PASSWORD: { message: "Password is too weak. Please choose a stronger password.", type: "warning" },
  UNKNOWN_ERROR: { message: "An unknown error occurred. Please try again.", type: "error" }
};

export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: { message: "Login successful! Redirecting to chat...", type: "success" },
  SIGNUP_SUCCESS: { message: "Account created successfully! You can now log in.", type: "success" },
  LOGOUT_SUCCESS: { message: "You have been logged out successfully.", type: "success" },
  PASSWORD_RESET_SUCCESS: { message: "Password reset link sent to your email.", type: "success" },
  PROFILE_UPDATE_SUCCESS: { message: "Profile updated successfully.", type: "success" },
}