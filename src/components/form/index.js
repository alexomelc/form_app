import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .min(1)
    .required("This field is mandatory"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("This field is mandatory"),
  password: yup
    .string("Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("This field is mandatory"),
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      component="form"
      sx={{
        width: 600,
        maxWidth: "100%",
        margin: "50px auto 0 auto",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <TextField
          fullWidth
          variant="standard"
          id="name"
          name="name"
          label="What is your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          variant="standard"
          id="email"
          name="email"
          label="What is your business email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          variant="standard"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          label="Enter your password"
        />
        <Button
          fullWidth
          onClick={formik.handleSubmit}
          color="primary"
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default Form;
