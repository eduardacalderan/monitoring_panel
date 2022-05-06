import React, { useState } from "react";
import Modal from "react-modal";

import { SideBar } from "./components/SideBar";
import { ErrorDetails } from "./pages/errorDetails";
import { DataProvider } from "./contexts/DashboardContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Carousel } from "./pages/Dashboard";

import { ErrorFixModal } from "./components/ErrorFixModal";
import { Metrics } from "./pages/Metrics";
import { SettingsPage } from "./pages/SettingsPage";
import { HelpAndSupport } from "./pages/Help&Support";
import "./App.scss";
import "./styles/global.scss";

Modal.setAppElement("#root");

function App() {
  const [isErrorFixModal, setIsErrorFixModalOpen] = useState(false); //the modal is closed

  function handleOpenErrorFixModal() {
    setIsErrorFixModalOpen(true);
    console.log("fui clicado");
  }

  function handleCloseErrorFixModal() {
    setIsErrorFixModalOpen(false);
  }

  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <SideBar />
          <div>
            <Routes>
              <Route
                path="/Detalhes"
                element={
                  <ErrorDetails onOpenErrorFix={handleOpenErrorFixModal} />
                }
              />
              <Route path="/Metricas" element={<Metrics />} />
              <Route path="/Configuracoes" element={<SettingsPage />} />
              <Route path="/Ajuda&Suporte" element={<HelpAndSupport />} />
            </Routes>
            <ErrorFixModal
              isOpen={isErrorFixModal}
              onRequestClose={handleCloseErrorFixModal}
            />
          </div>
          <Routes>
            {" "}
            <Route path="/" element={<Carousel />}></Route>
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
