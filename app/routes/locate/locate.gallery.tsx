import type { V2_MetaFunction, LinksFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Deleplads.dk - Locate" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function LocateGallery() {
  return (
    <div className="mapGallery">
      <div className="inner">
        <div className="listing">cristian is a lil bitch</div>
        <div className="listing">cristian is a lil bitch</div>
        <div className="listing">cristian is a lil bitch</div>
        <div className="listing">cristian is a lil bitch</div>
      </div>
    </div>
  );
}
