import type { V2_MetaFunction,} from "@remix-run/node";


export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Locate" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function userstorie() {
  return (
    <main>
      <div className="text-black mt-60">Benjamin er nice</div>
    </main>
  );
}
