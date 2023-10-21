import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    
    return {}
  } catch (error) {
    return { error };
  }
}


export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Opret udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function KommunalePriser() {
  return (
    <>
      <section className="kommunale-priser">
        <h2>HTML Table</h2>

        <table>
          <tr>
            <th>Kommune</th>
            <th>Gennemsnitspris</th>
            <th>Sidst opdateret</th>
          </tr>
          
        </table>
      </section>
      <Footer></Footer>
    </>
  );
}
