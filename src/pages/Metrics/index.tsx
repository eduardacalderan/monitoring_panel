import { Chart } from "../../components/Chart";
import { Header } from "../../components/Header";

import "./styles.scss";

export function Metrics() {
  return (
    <>
      <section>
        <Header mesage={"Métricas"} />
        <div className="chart-container">
          <Chart />
        </div>
      </section>
    </>
  );
}
