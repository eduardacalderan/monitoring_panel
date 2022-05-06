import { Header } from "../../components/Header";
import { HelpAndSupportContent } from "../../components/Help&Support";
import "./styles.scss";

export function HelpAndSupport() {
  return (
    <section>
      <Header mesage={"Ajuda e Suporte"} />{" "}
      <div className="help-and-support-container">
        <HelpAndSupportContent />
      </div>
    </section>
  );
}
