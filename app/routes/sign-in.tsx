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
import Navbar from "~/components/Navbar";
import Footer from "../components/Footer";
import { useNavigate, useOutletContext } from "@remix-run/react";
import type { SupabaseOutletContext } from "~/root";
import { Toaster, toast } from "react-hot-toast";

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

export default function SignIn() {
  const { supabase } = useOutletContext<SupabaseOutletContext>();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    if (email && password) {
      const response = await supabase.auth.signInWithPassword({
        email: email.toString(),
        password: password.toString(),
      });
      if (response.error) {
        toast.error(response.error.message);
      } else {
        navigate("/");
      }
    }
  };

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
            src="../../Wolt_logo_black.png"
            className="NavImage"
            sx={{ height: "40px" }}
          />
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
