import { Box, Typography } from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

const PasswordRequirements = ({ 
  password, 
  variant = "popover", // "popover" or "static"
  sx = {} 
}) => {
  const requirements = [
    { text: "At least 8 characters", test: (pwd) => pwd.length >= 8 },
    { text: "One uppercase letter", test: (pwd) => /[A-Z]/.test(pwd) },
    { text: "One lowercase letter", test: (pwd) => /[a-z]/.test(pwd) },
    { text: "One number", test: (pwd) => /[0-9]/.test(pwd) },
    { text: "One special character", test: (pwd) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd) },
  ];

  const getIconSize = () => {
    return variant === "popover" ? 16 : 12;
  };

  const getIconSpacing = () => {
    return variant === "popover" ? 1 : 0.5;
  };

  const getTextVariant = () => {
    return variant === "popover" ? "body2" : "caption";
  };

  const getBottomMargin = () => {
    return variant === "popover" ? 0.5 : 0.25;
  };

  const containerSx = variant === "popover" 
    ? { mb: getBottomMargin() }
    : { mt: 0.25 };

  return (
    <Box sx={containerSx}>
      {requirements.map((requirement, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            ...containerSx,
          }}
        >
          {requirement.test(password) ? (
            <CheckCircle
              sx={{
                fontSize: getIconSize(),
                color: "success.main",
                mr: getIconSpacing(),
              }}
            />
          ) : (
            <Cancel
              sx={{
                fontSize: getIconSize(),
                color: "error.main",
                mr: getIconSpacing(),
              }}
            />
          )}
          <Typography variant={getTextVariant()} color="text.secondary">
            {requirement.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PasswordRequirements;
