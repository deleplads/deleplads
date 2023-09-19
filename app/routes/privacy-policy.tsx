import type { V2_MetaFunction } from "@remix-run/node";
import Footer from "../components/Footer";
import PrivacyPolicy from "../components/PrivacyPolicy";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Persondatapolitik" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main>
      <PrivacyPolicy></PrivacyPolicy>
      <Footer></Footer>
    </main>
  );
}
