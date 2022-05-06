import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";

import faker from "@faker-js/faker";

import "./styles.scss";
import { BiLineChart } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { AiOutlineCloudUpload, AiOutlinePieChart } from "react-icons/ai";
import { ImEnter, ImExit } from "react-icons/im";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export function Chart() {
  //line chart
  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
      },
    },
    color: "white",
  };

  const labels = ["Jun", "Jul", "Ago", "Set", "Out"];

  const data = {
    labels,
    datasets: [
      {
        data: labels.map(() => faker.datatype.number({ min: 0, max: 150 })),
        borderColor: "#7B77F2",
        backgroundColor: "#7B77F2",
        pointBorderColor: "#6966cf", //#9e9fa0
        pointBackgroundColor: "#7B77F2",
        pointBorderWidth: 2.5,
        yAxisID: "y",
      },
    ],
  };

  //pie chart

  const label = ["HL7", "Rest"];

  const dataPie = {
    label,
    datasets: [
      {
        label: "# of Votes",
        data: [5, 19],
        backgroundColor: ["rgba(255, 255, 255,1)", "#7B77F2"],
        borderColor: ["rgba(255, 255, 255, 1)", "#7B77F2"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-content">
      <div className="chart-line bg">
        <p>
          <span>
            <BiLineChart />
          </span>
          Quantidade de Registros
        </p>
        <Line
          options={options}
          data={data}
          style={{
            maxHeight: "200px",
            width: "1270px",
          }}
          className="line"
        />
      </div>{" "}
      <div className="details">
        <div className="records bg">
          <div className="text">
            <p>Registros/Fornecedores</p>{" "}
            <i>
              <CgNotes /> <span>54</span>
            </i>
          </div>

          <table>
            <tr>
              <td>Protheus</td>
              <td className="num">16</td>
            </tr>
            <tr>
              <td>Epmed</td>
              <td className="num">12</td>
            </tr>{" "}
            <tr>
              <td>MXM</td>
              <td className="num">11</td>
            </tr>{" "}
            <tr>
              <td>Anestech</td>
              <td className="num">15</td>
            </tr>
          </table>
        </div>
        <div className="records architecture-types bg">
          <div className="text">
            <p>Tipos de Arquitetura</p>
            <i>
              <AiOutlinePieChart /> <span>2</span>{" "}
            </i>
          </div>
          <div className="pie">
            <div>
              {" "}
              <Pie data={dataPie} style={{ maxHeight: "150px" }} />
            </div>
            <div className="infos-pie">
              {" "}
              <p>
                <span>.</span> Rest
              </p>
              <p>
                <span className="hl7">.</span> HL7
              </p>
            </div>
          </div>
        </div>
        <div className="records integrations bg">
          <div className="text">
            <p>Integrações</p>
            <i>
              <AiOutlineCloudUpload /> <span>8</span>{" "}
            </i>
          </div>

          <table>
            <tr>
              {" "}
              <td className="icon">
                <i>
                  <ImEnter />
                </i>{" "}
                Entradas
              </td>
              <td className="num">3</td>
            </tr>
            <tr>
              {" "}
              <td className="icon">
                <i>
                  {" "}
                  <ImExit />
                </i>{" "}
                Saídas
              </td>
              <td className="num">5</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
