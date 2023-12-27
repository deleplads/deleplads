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
import { useActionData, useNavigate, useOutletContext } from "@remix-run/react";
import { Renderable, Toast, Toaster, ValueFunction, toast } from "react-hot-toast";
import { useEffect, useState } from "react";


export default function SignIn() {
  const actionData = useActionData();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { supabaseClientBrowser } = useOutletContext();
  const navigate = useNavigate();
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (email && password) {
      const response = await supabaseClientBrowser.auth.signInWithPassword({
        email: email.toString(),
        password: password.toString(),
      });
      if (response.error) {
        toast.error("Ugyldige login detaljer");
      } else {
        navigate("/");
      }
    }
  }

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
            border: "1px solid #var(--BrandTertiary)",
          }}
        > 
          <Box
            component="form"
            onSubmit={handleSubmit}
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
