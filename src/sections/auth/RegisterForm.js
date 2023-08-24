import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from "@mui/material";
import { Eye, EyeSlash } from "phosphor-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { RHFTextField } from "../../components/hook-form";
import FormProvider from "../../components/hook-form/FormProvider";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),

    email: Yup.string()
      .required("Email is required")
      .email("Email must be valid address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    firstName:"",
    lastName:"",
    email: "",
    password: "",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async () => {
    try {
      //submit data to backend
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...errors,
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} mb={4}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <Stack direction={{ xs:"column", sm:"row" }} spacing={2}>
        <RHFTextField name="firstName" label="First Name" />
        <RHFTextField name="lastName" label="Last Name" />


        </Stack>

        <RHFTextField name="email" label="Email address" />

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
         <RHFTextField
          name="confirmPassword"
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <Eye /> : <EyeSlash />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      {/* <Stack alignItems={"flex-end"} sx={{ my: 2 }}>
        <Link variant="body2" color="inherit" underline="always">
          Forgot Password?
        </Link>
      </Stack> */}
      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      > Sign Up</Button>
    </FormProvider>
  )
};

export default RegisterForm;
