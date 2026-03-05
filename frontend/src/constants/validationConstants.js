// Validation messages and constants for the volunteer management platform

export const VALIDATION_MESSAGES = {
  // Email validation
  EMAIL_REQUIRED: "Email is required",
  EMAIL_INVALID: "Please enter a valid email address",
  EMAIL_TOO_SHORT: "Email must be at least 5 characters long",
  EMAIL_TOO_LONG: "Email must be less than 255 characters long",
  
  // Password validation
  PASSWORD_REQUIRED: "Password is required",
  PASSWORD_TOO_SHORT: "Password must be at least 8 characters long",
  PASSWORD_TOO_LONG: "Password must be less than 128 characters long",
  PASSWORD_NO_UPPERCASE: "Password must contain at least one uppercase letter",
  PASSWORD_NO_LOWERCASE: "Password must contain at least one lowercase letter",
  PASSWORD_NO_NUMBER: "Password must contain at least one number",
  PASSWORD_NO_SPECIAL: "Password must contain at least one special character",
  PASSWORD_WEAK: "Password is too weak",
  
  // Name validation
  NAME_REQUIRED: "Full name is required",
  NAME_TOO_SHORT: "Name must be at least 2 characters long",
  NAME_TOO_LONG: "Name must be less than 100 characters long",
  NAME_INVALID: "Name can only contain letters, spaces, and hyphens",
  
  // Role validation
  ROLE_REQUIRED: "Please select a role",
  ROLE_INVALID: "Please select a valid role",
  
  // Terms validation
  TERMS_REQUIRED: "You must accept the terms and conditions",
  
  // General validation
  FIELD_REQUIRED: "This field is required",
  FIELD_TOO_SHORT: "This field must be at least {min} characters long",
  FIELD_TOO_LONG: "This field must be less than {max} characters long",
  INVALID_FORMAT: "Invalid format",
  
  // Success messages
  REGISTRATION_SUCCESS: "Registration successful! Redirecting to login...",
  LOGIN_SUCCESS: "Login successful! Redirecting...",
  
  // Error messages
  REGISTRATION_FAILED: "Registration failed. Please try again.",
  LOGIN_FAILED: "Login failed. Please check your credentials.",
  NETWORK_ERROR: "Network error. Please check your connection.",
  SERVER_ERROR: "Server error. Please try again later.",
};

export const VALIDATION_RULES = {
  EMAIL: {
    required: true,
    minLength: 5,
    maxLength: 255,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  PASSWORD: {
    required: true,
    minLength: 8,
    maxLength: 128,
    pattern: {
      uppercase: /[A-Z]/,
      lowercase: /[a-z]/,
      number: /[0-9]/,
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
    },
  },
  NAME: {
    required: true,
    minLength: 2,
    maxLength: 100,
    pattern: /^[a-zA-Z\s-]+$/,
  },
  ROLE: {
    required: true,
    allowedValues: ["volunteer", "organizer"],
  },
};

export const VALIDATION_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  NAME: /^[a-zA-Z\s-]+$/,
  PASSWORD_UPPERCASE: /[A-Z]/,
  PASSWORD_LOWERCASE: /[a-z]/,
  PASSWORD_NUMBER: /[0-9]/,
  PASSWORD_SPECIAL: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
};

export const ERROR_TYPES = {
  REQUIRED: "required",
  MIN_LENGTH: "minLength",
  MAX_LENGTH: "maxLength",
  INVALID_FORMAT: "invalidFormat",
  PATTERN_MISMATCH: "patternMismatch",
};

// Helper function to get validation message
export const getValidationMessage = (key, params = {}) => {
  let message = VALIDATION_MESSAGES[key] || "Invalid input";
  
  // Replace parameters in message
  Object.keys(params).forEach(param => {
    message = message.replace(`{${param}}`, params[param]);
  });
  
  return message;
};
