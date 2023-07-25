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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import { useNavigate, useOutletContext } from "@remix-run/react";
import type { SupabaseOutletContext } from "~/root";
import { toast, Toaster } from "react-hot-toast";

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

export default function SignUp() {
  const { supabase } = useOutletContext<SupabaseOutletContext>();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const firstName = data.get("firstName");
    const lastName = data.get("lastName");

    if (email && password && firstName && lastName) {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email.toString(),
        password: password.toString(),
      });

      if (data) {
        // User signed in, now let's create the profile in the 'profiles' table
        const { error: profileError } = await supabase.from("profiles").insert([
          {
            id: data.user?.id,
            first_name: firstName.toString(),
            last_name: lastName.toString(),
          },
        ]);

        if (profileError) {
          // Handle error, maybe show the user that we couldn't create the profile
          toast.error("Error creating profile!");
          console.error("Error creating profile:", profileError);
        } else {
          // Profile created, navigate to home or dashboard page
          navigate("/", {
            state: { message: "Successfully signed up and logged in!" },
          });
        }
      } else if (signUpError) {
        // handle error, maybe show the user that we couldn't sign up
        toast.error("Error signing up!");
        console.error("Error signing up:", signUpError.message);
      }
    }
  };
  return (
    <>
      <Toaster position="top-right" />
      <Navbar></Navbar>
      <Container id="sign-up-container" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Tilmeld
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Fornavn"
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
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
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
              sx={{ mt: 3, mb: 2 }}
            >
              Tilmeld
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="#" variant="body2">
                  Har du allerede en konto? Log ind
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer></Footer>
    </>
  );
}
