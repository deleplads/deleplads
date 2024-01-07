import type { V2_MetaFunction } from "@remix-run/node";
import LegalMenu from "~/components/LegalMenu";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Cookiepolitik" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function CookiesRoute() {
  return (
    <section className="legal">
      <div className="menu">
        <div className="menuList">
          <LegalMenu></LegalMenu>
        </div>
      </div>
      <div className="content">
        <h1>Cookies</h1>
        Sidst opdateret: 28. Juli, 2023 (Version 1.0.0)
        <br></br>
        <br></br>
        <p>Kommer snarest.</p>
      </div>
    </section>
  );
}
