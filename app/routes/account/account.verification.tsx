import { Button } from "@mui/material";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import GppBadOutlinedIcon from "@mui/icons-material/GppBadOutlined";
import { LoaderFunction } from "@remix-run/node";
import { requireUserId } from "utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  return null;
};

export default function Payment() {
  return (
    <section className="account">
      <h1>Verificeringer</h1>
      <p>
        Her kan du beskytte din konto ved at verificere din identitet.
      </p>
      <div className="list-of-verifications">
        <div className="verification-group">
          <h3>To-trins-verifikation</h3>
          <hr />
          <div className="verification-setting">
            <span>
              <GppGoodOutlinedIcon
                sx={{ fontSize: "30px", color: "#00C875" }}
              />
              <div>
                <p>
                  <b>E-mail-verificering</b>
                </p>
                <p>Din e-mail e***@ex***.com er blevet verificeret.</p>
              </div>
            </span>
            <Button
              variant="contained"
              sx={{
                textTransform: "initial",
                fontWeight: "700",
                background: "#30363D",
                height: "fit-content",
              }}
            >
              Rediger
            </Button>
          </div>
          <div className="verification-setting">
            <span>
              <GppBadOutlinedIcon sx={{ fontSize: "30px", color: "#DD4A5C" }} />
              <div>
                <p>
                  <b>Telefonnummer-verificering</b>
                </p>
                <p>Du har ikke verificeret dit telefonnummer.</p>
              </div>
            </span>
            <Button
              variant="contained"
              sx={{
                textTransform: "initial",
                fontWeight: "700",
                background: "#30363D",
                height: "fit-content",
              }}
            >
              Tilføj
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
