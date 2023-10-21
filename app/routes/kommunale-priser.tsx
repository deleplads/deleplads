import type { V2_MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";

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

          {/* Hovedstaden */}

          <tr>
            <td>Albertslund Kommune</td>
            <td>DKK 15,50</td>
            <td>17/10/2023</td>
          </tr>
          <tr>
            <td>Allerød Kommune</td>
            <td>DKK 12,00</td>
            <td>17/10/2023</td>
          </tr>
          <tr>
            <td>Ballerup Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Bornholm Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Brøndby Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Dragør Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Egedal Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Fredensborg Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Frederiksberg Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Frederikssund Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Furesø Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Gentofte Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Gladsaxe Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Glostrup Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Gribskov Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Halsnæs Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Helsingør Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Herlev Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Hillerød Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Hvidovre Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Høje-Taastrup Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Hørsholm Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Ishjøj Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>København Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Lyngby-Taarbæk Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Rudersdal Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Rødovre Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Tårnby Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Vallensbæk Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>

          {/* Midtjylland */}

          <tr>
            <td>Favrskov Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Hedensted Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Herning Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Holstebro Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Horsens Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Ikast-Brande Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Lemvig Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Norddjurs Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Odder Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Randers Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Rinkøbing-Skjern Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Samsø Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Silkeborg Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Skanderborg Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Skive Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Struer Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Syddjurs Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Viborg Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Aarhus Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>

          {/* Nordjylland */}

          <tr>
            <td>Brønderslev Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Frederikshavn Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Hjørring Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Jammerbugt Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Læsø Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Mariagerfjord Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Morsø Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Rebild Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Thisted Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Vesthimmerland Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Aalborg Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>

          {/* Sjælland */}

          <tr>
            <td>Faxe Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Greve Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Guldborgsund Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Holbæk Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Kalundborg Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Køge Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Lejre Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Lolland Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Næstved Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Odsherred Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Ringsted Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Roskilde Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Slagelse Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Solrød Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Sorø Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Stevns Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Vordingborg Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>

          {/* Syddanmark */}

          <tr>
            <td>Assens Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Billund Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Esbjerg Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Fanø Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Fredericia Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Faaborg-Midtfyn Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Haderslev Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Kerteminde Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Kolding Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Langeland Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Middelfart Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Nordfyn Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Nyborg Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Odense Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Svendborg Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Sønderborg Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Tønder Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Varde Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Vejen Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Vejle Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Ærø Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Aabenraa Kommune</td>
            <td>Maria</td>
            <td>Germany</td>
          </tr>
        </table>
      </section>
      <Footer></Footer>
    </>
  );
}
