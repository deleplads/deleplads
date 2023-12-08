import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useActionData, useNavigate } from "@remix-run/react";

import type {
  Renderable,
  Toast,
  ValueFunction} from "react-hot-toast";
import {
  toast,
  Toaster
} from "react-hot-toast";
import {   register } from "../../utils/auth.server";
import type { ActionFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useEffect, useState } from "react";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "utils/validators.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();

  const email = form.get("email");
  const password = form.get("password");
  const firstName = form.get("firstName");
  const lastName = form.get("lastName");

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof firstName !== "string" ||
    typeof lastName !== "string"
  ) {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 });
  }
  const errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    firstName: validateName((firstName as string) || ""),
    lastName: validateName((lastName as string) || ""),
  };

  if (Object.values(errors).some(Boolean))
    return json(
      {
        errors,
        fields: { email, password, firstName, lastName },
        form: action,
      },
      { status: 400 }
    );
    
    return await register({ email, password, firstName, lastName })
};

export default function SignUp() {
  const actionData = useActionData();
  console.log("SignUp rendered");
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form: any) => ({ ...form, [field]: event.target.value }));
  };

  useEffect(() => {
    // Check for formError and show toast if it exists
    if (actionData?.error) {
      toast.error(actionData.error);
    }

    // Check for errors (assuming it's an array of error messages)
    if (actionData?.errors) {
      actionData.errors.forEach((error: Renderable | ValueFunction<Renderable, Toast>) =>
        toast.error(error)
      );
    }
  }, [actionData]);

  return (
    <>
      <Toaster position="top-right" />
      <Container id="sign-up-container" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "white",
            padding: "25px",
            border: "1px solid #var(--BrandTertiary)",
          }}
        >
          <Box component="form" noValidate method="POST" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Fornavn"
                  onChange={(e) => handleInputChange(e, "firstName")}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Efternavn"
                  name="lastName"
                  onChange={(e) => handleInputChange(e, "lastName")}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="E-mail addresse"
                  name="email"
                  onChange={(e) => handleInputChange(e, "email")}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Kodeord"
                  type="password"
                  id="password"
                  onChange={(e) => handleInputChange(e, "password")}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  sx={{ fontSize: "14px" }}
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Jeg vil gerne modtage inspiration, markedsføringskampagner og opdateringer via e-mail."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: "initial", fontSize: "16px" }}
            >
              Tilmeld
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/sign-in" variant="body2">
                  Har du allerede en konto? Log ind
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
