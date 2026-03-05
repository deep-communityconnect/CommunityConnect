import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "../../../api/axios";
import { Snackbar, Alert } from "@mui/material";
import PasswordField from "../../../components/common/PasswordField";
import {
  VALIDATION_RULES,
  VALIDATION_MESSAGES,
  getValidationMessage,
} from "../../../constants/validationConstants";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axiosInstance.get("auth/check_session/");
        window.location.href = "/";
      } catch {}
    };

    // Load saved credentials if remember me was checked
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setFormData(prev => ({ ...prev, email: savedEmail }));
      setRememberMe(true);
    }

    checkAuth();
  }, []);

  const validateField = (name, value) => {
    const errors = [];

    switch (name) {
      case "email":
        if (!value) {
          errors.push(VALIDATION_MESSAGES.EMAIL_REQUIRED);
        } else if (!VALIDATION_RULES.EMAIL.pattern.test(value)) {
          errors.push(VALIDATION_MESSAGES.EMAIL_INVALID);
        } else if (value.length < VALIDATION_RULES.EMAIL.minLength) {
          errors.push(VALIDATION_MESSAGES.EMAIL_TOO_SHORT);
        } else if (value.length > VALIDATION_RULES.EMAIL.maxLength) {
          errors.push(VALIDATION_MESSAGES.EMAIL_TOO_LONG);
        }
        break;

      case "password":
        if (!value) {
          errors.push(VALIDATION_MESSAGES.PASSWORD_REQUIRED);
        }
        break;

      default:
        break;
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate all fields in real-time
    const errors = validateField(name, value);
    setFieldErrors(prev => ({
      ...prev,
      [name]: errors,
    }));
    setTouchedFields(prev => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    // Validation is already real-time, just ensure field is marked as touched
    setTouchedFields(prev => ({
      ...prev,
      [name]: true,
    }));
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach(field => {
      const fieldErrors = validateField(field, formData[field]);
      if (fieldErrors.length > 0) {
        errors[field] = fieldErrors;
      }
    });

    setFieldErrors(errors);
    setTouchedFields(Object.keys(formData).reduce((acc, field) => ({ ...acc, [field]: true }), {}));

    return Object.keys(errors).length === 0;
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    // Handle remember me functionality
    if (rememberMe) {
      localStorage.setItem("rememberedEmail", formData.email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }

    const data = new FormData();
    data.append("email", formData.email);
    data.append("password", formData.password);

    try {
      const res = await loginUser(data);

      const role = res.data.role;

      if (role === "organizer") {
        navigate("/org/opportunities");
      } else {
        navigate("/");
      }

    } catch (err) {
      let message = "Login failed";

      if (err.response?.data) {
        const errors = err.response.data;

        message = Object.values(errors)
          .flat()
          .join(" | ");
      }

      setSnackbar({
        open: true,
        message,
        severity: "error",
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Paper elevation={3} sx={{ padding: 4, width: "100%" }}>
          <Typography variant="h5" gutterBottom align="center">
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touchedFields.email && fieldErrors.email?.length > 0}
              helperText={touchedFields.email && fieldErrors.email?.[0]}
            />

            <PasswordField
              label="Password"
              name="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touchedFields.password && fieldErrors.password?.length > 0}
              helperText={touchedFields.password && fieldErrors.password?.[0]}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  color="primary"
                />
              }
              label="Remember me"
              sx={{ mt: 1 }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Login
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don’t have an account?{" "}
              <Typography
                component={RouterLink}
                to="/register"
                sx={{ color: "primary.main", textDecoration: "none", fontWeight: 500 }}
              >
              Register here
              </Typography>
            </Typography>
          </Box>
        </Paper>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} variant="filled">
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;