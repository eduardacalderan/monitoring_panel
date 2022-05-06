import { AiOutlinePieChart } from "react-icons/ai";
import { BiRocket } from "react-icons/bi";
import { VscTools } from "react-icons/vsc";
import { RiWechatLine } from "react-icons/ri";
import ReactTooltip from "react-tooltip";

import "./styles.scss";
import { Link } from "react-router-dom";

export function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <div data-tip="Logo">
          <div className="logo-img"></div>
          <ReactTooltip place="right" type="light" effect="solid" />
        </div>
      </div>
      <nav className="nav flex-column">
        <Link to="/">
          <i>
            <p data-tip="Dashboard">
              <AiOutlinePieChart />
            </p>
            <ReactTooltip
              place="right"
              type="light"
              effect="solid"
              className="tooltip"
            />
          </i>
        </Link>
        <Link to="/Metricas">
          <i>
            <p data-tip="Métricas">
              <BiRocket />
            </p>
            <ReactTooltip place="right" type="light" effect="solid" />
          </i>
        </Link>
        <Link to="/Configuracoes">
          <i>
            <p data-tip="Configurações">
              <VscTools />
            </p>
            <ReactTooltip place="right" type="light" effect="solid" />
          </i>
        </Link>
        <Link to="/Ajuda&Suporte">
          <i>
            <p data-tip="Ajuda & Suporte">
              <RiWechatLine />
            </p>
            <ReactTooltip place="right" type="light" effect="solid" />
          </i>
        </Link>
      </nav>
    </div>
  );
}
