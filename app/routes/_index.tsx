<<<<<<< HEAD
import type { V2_MetaFunction} from "@remix-run/node";
=======
import type { V2_MetaFunction } from "@remix-run/node";
>>>>>>> main
import Footer from "~/components/Footer";
import Gallery from "~/components/Gallery";
import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import SearchBar from "~/components/SearchBar";
import toast, { Toaster } from 'react-hot-toast';
import { useLocation } from "@remix-run/react";
import { useEffect } from "react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export default function Index() {
  const location = useLocation();
  const message = location.state?.message;

  useEffect(() => {
    if (message) {
      toast.success(message);
    }
  }, [message]);

  return (
    <>
      <Toaster position="top-right"/>
      <Navbar></Navbar>
      <Hero></Hero>
      <SearchBar></SearchBar>
      <Gallery></Gallery>
      <Footer></Footer>
    </>
  );
}
