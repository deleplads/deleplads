"use client";
import Box from "@mui/material/Box";

function UdlejeTimeline() {
  return (
    <main className="timeline">
      <div className="line">
        <div className="line-number">1</div>
        <div className="line-number">2</div>
        <div className="line-number">3</div>
        <div className="line-number">4</div>
        <div className="line-number">5</div>
      </div>
      <section className="timeline-content-block">
        <div>
          <h2>Opret en konto</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            suscipit obcaecati fugiat iusto aperiam tempore?
          </p>
        </div>
        <Box component="img" src="./phone-mu.png" />
      </section>
      <section className="timeline-content-block">
        <Box component="img" src="./phone-mu.png" />
        <div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            suscipit obcaecati fugiat iusto aperiam tempore?
          </p>
        </div>
      </section>
      <section className="timeline-content-block">
        <div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            suscipit obcaecati fugiat iusto aperiam tempore?
          </p>
        </div>
        <Box component="img" src="./phone-mu.png" />
      </section>
      <section className="timeline-content-block">
        <Box component="img" src="./phone-mu.png" />
        <div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            suscipit obcaecati fugiat iusto aperiam tempore?
          </p>
        </div>
      </section>
      <section className="timeline-content-block">
        <div>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            suscipit obcaecati fugiat iusto aperiam tempore?
          </p>
        </div>
        <Box component="img" src="./phone-mu.png" />
      </section>
    </main>
  );
}

export default UdlejeTimeline;
