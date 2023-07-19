import type { V2_MetaFunction } from "@remix-run/node";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Privacy from "../components/privacy"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Persondatapolitik" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Navbar></Navbar>
      <Privacy></Privacy>
      <Footer></Footer>
    </main>
  );
}
