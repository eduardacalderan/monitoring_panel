import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MdOutlineHelp } from "react-icons/md";
import { Header } from "../Header/index";

import "./styles.scss";

interface ErrorResponseProps {
  id: number;
  name_hosp: string;
  error_list: Array<{
    ID: string;
    Name: string;
    Error: Array<{
      id: string;
      generated_at: string;
      processed_at: string;
      description: string;
    }>;
  }>;

  onOpenErrorFixModal: () => void;
}

export default function ControlledAccordions(props: ErrorResponseProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <div className="error-container">
        <h2>{props.name_hosp}</h2> <div className="divider"></div>
        <div className="error-content">
          <div className="columns">
            <div className="quantity">
              <h3>Quantidade: </h3>

              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={{
                  background: "none",
                  color: "white",
                  boxShadow: "none",
                  marginTop: "-0.6rem",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "var(--blue)" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    <div className="error-length">
                      <p>{props.error_list[0].Error.length}</p>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="accordion-content">
                      <p>
                        Id Integra:
                        <span>{props.error_list[0].Error[0].id}</span>
                      </p>
                      <p>
                        Data e hora gerado:
                        <span>{props.error_list[0].Error[0].generated_at}</span>
                      </p>
                      <p>
                        Data e hora processado:
                        <span>{props.error_list[0].Error[0].processed_at}</span>
                      </p>
                    </div>
                    <div className="accordion-content">
                      {" "}
                      <p>
                        Id Integra:
                        <span>{props.error_list[0].Error[1].id}</span>{" "}
                      </p>
                      <p>
                        Data e hora gerado:
                        <span>
                          {props.error_list[0].Error[1].generated_at}
                        </span>{" "}
                      </p>
                      <p>
                        Data e hora processado:
                        <span>{props.error_list[0].Error[1].processed_at}</span>
                      </p>
                    </div>
                  </Typography>{" "}
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                sx={{
                  background: "none",
                  color: "white",
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "var(--blue)" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    <div className="error-length">
                      <p>{props.error_list[1].Error.length}</p>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="accordion-content">
                      <p>
                        Id Integra:
                        <span>{props.error_list[0].Error[0].id}</span>
                      </p>
                      <p>
                        Data e hora gerado:
                        <span>{props.error_list[0].Error[0].generated_at}</span>
                      </p>
                      <p>
                        Data e hora processado:
                        <span>{props.error_list[0].Error[0].processed_at}</span>
                      </p>
                    </div>
                    <div className="accordion-content">
                      <p>
                        Id Integra:
                        <span>{props.error_list[0].Error[1].id}</span>
                      </p>
                      <p>
                        Data e hora gerado:
                        <span>{props.error_list[0].Error[1].generated_at}</span>
                      </p>
                      <p>
                        Data e hora processado:
                        <span>{props.error_list[0].Error[1].processed_at}</span>
                      </p>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="error-name">
              <h3>Nome: </h3>
              <div className="name">
                <p>
                  {props.error_list[0].Name}
                  <button type="button" onClick={props.onOpenErrorFixModal}>
                    <MdOutlineHelp />
                  </button>
                </p>
                <p>
                  {props.error_list[1].Name}
                  <button type="button" onClick={props.onOpenErrorFixModal}>
                    <MdOutlineHelp />
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
