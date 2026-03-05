import { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
 
} from "@mui/icons-material";
import {
  VALIDATION_RULES,
  VALIDATION_MESSAGES,
  getValidationMessage,
} from "../../constants/validationConstants";

const PasswordField = ({
  value,
  onChange,
  onBlur,
  error = false,
  helperText = "",
  showRequirements = false,
  required = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const [touched, setTouched] = useState(false);

  const validatePassword = (password) => {
    const errors = [];
    const rules = VALIDATION_RULES.PASSWORD;

    // Required validation
    if (required && !password) {
      errors.push(VALIDATION_MESSAGES.PASSWORD_REQUIRED);
      return errors;
    }

    if (!password) return errors;

    // Length validation
    if (password.length < rules.minLength) {
      errors.push(getValidationMessage("PASSWORD_TOO_SHORT"));
    }

    if (password.length > rules.maxLength) {
      errors.push(getValidationMessage("PASSWORD_TOO_LONG"));
    }

    // Pattern validation
    if (!rules.pattern.uppercase.test(password)) {
      errors.push(VALIDATION_MESSAGES.PASSWORD_NO_UPPERCASE);
    }

    if (!rules.pattern.lowercase.test(password)) {
      errors.push(VALIDATION_MESSAGES.PASSWORD_NO_LOWERCASE);
    }

    if (!rules.pattern.number.test(password)) {
      errors.push(VALIDATION_MESSAGES.PASSWORD_NO_NUMBER);
    }

    if (!rules.pattern.special.test(password)) {
      errors.push(VALIDATION_MESSAGES.PASSWORD_NO_SPECIAL);
    }

    return errors;
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    onChange(e);
    
    // Real-time validation for password
    const errors = validatePassword(newPassword);
    setValidationErrors(errors);
  };

  const handleBlur = (e) => {
    setTouched(true);
    // Validation is already real-time in handleChange
    if (onBlur) onBlur(e);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const hasError = error || validationErrors.length > 0;
  const displayHelperText = helperText || (validationErrors.length > 0 ? validationErrors[0] : "");

  return (
    <Box>
      <TextField
        {...props}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={hasError}
        helperText={displayHelperText}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
           
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePasswordVisibility}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

   
    </Box>
  );
};

export default PasswordField;