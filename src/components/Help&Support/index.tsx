import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io";
import "./styles.scss";
export function HelpAndSupportContent() {
  return (
    <div className="help-and-support">
      <p>
        Você pode abrir um chamado em nosso
        <a href="#"> HELP DESK</a> ou entrar em contato através dos nossos
        canais abaixo.
      </p>

      <div className="icons">
        <i>
          <BsInstagram />{" "}
        </i>
        <i>
          <ImLinkedin2 />{" "}
        </i>
        <i>
          <BsWhatsapp />{" "}
        </i>
      </div>
    </div>
  );
}
