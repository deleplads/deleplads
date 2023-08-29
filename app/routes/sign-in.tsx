import * as React from "react";
import Avatar from "@mui/material/Avatar";
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
import { Renderable, Toast, Toaster, ValueFunction, toast } from "react-hot-toast";
import { login } from '../../utils/auth.server'
import { validateEmail } from "../../utils/validators.server";
import type { ActionFunction} from "@remix-run/node";
import { json } from "@remix-run/node";
import { useEffect, useState } from "react";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  
  const email = form.get("email");
  const password = form.get("password");
  
  if (
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return json({ error: `Invalid Form Data`, form: action }, { status: 400 });
  }
  const errors = {
    email: validateEmail(email),
  };

  if (Object.values(errors).some(Boolean))
    return json(
      { errors, fields: { email, password }, form: action },
      { status: 400 }
    );

    return await login({ email, password })
};



export default function SignIn() {
  const actionData = useActionData();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };


  const [formError, setFormError] = useState(actionData?.error || '');
  const [errors, setErrors] = useState(actionData?.errors || '');


  useEffect(() => {
    // Check for formError and show toast if it exists
    if (formError) {
      toast.error(formError);
    }

    // Check for errors (assuming it's an array of error messages)
    if (errors && errors.length > 0) {
      errors.forEach((error: Renderable | ValueFunction<Renderable, Toast>) => toast.error(error));
    }
  }, [formError, errors]);


  return (
    <>
      <Toaster position="top-right" />
      <Container id="sign-in-container" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "white",
            padding: "25px",
            border: "1px solid #e5e5e5",
          }}
        > 
          <Box
            component="img"
            src="./Wolt_logo_black.png"
            className="NavImage"
            sx={{ height: "40px" }}
          />
          <Box
            component="form"
            method="POST"
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail adresse"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => handleInputChange(e, "email")}
              error={errors?.email}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Kodeord"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={(e) => handleInputChange(e, "password")}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Husk mig"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: "initial", fontSize: "16px" }}
            >
              Log ind
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Glemt kodeord?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Har du ikke en konto? Tilmeld dig"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
