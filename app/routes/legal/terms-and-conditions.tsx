import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Regler og vilkår" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function TermsAndConditions() {
  return (
    <main>
    </main>
  );
}
