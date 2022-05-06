import { useContext } from "react";
import ControlledAccordions from "../../components/ErrorAccordion";
import { Header } from "../../components/Header";
import { DashboardContext } from "../../contexts/DashboardContext";

import "./styles.scss";

interface ErrorFixModalProps {
  onOpenErrorFix: () => void;
}

export function ErrorDetails({ onOpenErrorFix }: ErrorFixModalProps) {
  const { companies } = useContext(DashboardContext);

  return (
    <>
      <section>
        <Header mesage={"Dashboard/Detalhes"} />

        <div className="error-content ">
          {companies?.map((company) => (
            <ControlledAccordions
              key={company.id}
              id={company.id}
              name_hosp={company.name_hosp}
              error_list={company.error_list}
              onOpenErrorFixModal={onOpenErrorFix}
            />
          ))}
        </div>
      </section>
    </>
  );
}
