import { type LoaderFunction, type V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAllcommunes } from "utils/commune.server";
import Footer from "~/components/Footer";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const communes = await getAllcommunes();
    
    return {communes}
  } catch (error) {
    return { error };
  }
}
function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getUTCFullYear();
  
  return `${day}-${month}-${year}`;
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Opret udlejning" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function KommunalePriser() {
  const data = useLoaderData();

  const { communes } = data;
  return (
    <>
      <section className="kommunale-priser">
        <h2>HTML Table</h2>

        <table>
  <thead>
    <tr>
      <th>Kommune</th>
      <th>Gennemsnitspris</th>
      <th>Sidst opdateret</th>
    </tr>
  </thead>
  <tbody>
    {communes.map(element => 
      <tr key={element.commune}>
        <td>{element.commune}</td>
        <td>{element.price}</td>
        <td>{formatDate(element.updated_at)}</td>
      </tr>
      )}
  </tbody>
</table>
      </section>
      <Footer></Footer>
    </>
  );
}
