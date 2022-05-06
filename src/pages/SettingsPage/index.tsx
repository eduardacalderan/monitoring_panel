import { Header } from "../../components/Header";
import { SettingsContent } from "../../components/SettingsContent";

import "./styles.scss";

export function SettingsPage() {
  return (
    <section>
      <Header mesage={"Configurações"} />
      <div className="settings-container">
        <SettingsContent />
      </div>
    </section>
  );
}
