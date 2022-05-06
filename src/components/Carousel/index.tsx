import React from "react";
import { HiOutlineIdentification } from "react-icons/hi";
import { Link } from "react-router-dom";

import "./styles.scss";

interface StatusCardProps {
  id: number;
  name: string;
  last_record: string;
  total_error: string;
  success: string;
  waiting: string;
}

export function CarouselItem(props: StatusCardProps) {
  function status() {
    if (props.total_error === "0" && props.waiting === "0") {
      return (
        <>
          <div className="infos">
            <p>
              <i>
                <HiOutlineIdentification />
              </i>
              {props.name}
            </p>
            <div className="status">
              <p className="waiting">Aguardando: {props.waiting}</p>
              <p className="error">Erro: {props.total_error}</p>
            </div>
          </div>
          <div className="circle success-circle">
            <div className="num">{props.success}</div>
          </div>
        </>
      );
    } else if (props.total_error > props.waiting) {
      return (
        <>
          <div className="infos">
            <p>
              <i>
                <HiOutlineIdentification />
              </i>
              {props.name}
            </p>
            <div className="status">
              <p className="success">Sucesso: {props.success}</p>
              <p className="waiting">Aguardando: {props.waiting}</p>
            </div>
          </div>
          <Link to="/Detalhes" className="link">
            {" "}
            <div className="circle error-circle">
              <div className="num">{props.total_error}</div>
            </div>
          </Link>
        </>
      );
    } else if (props.total_error < props.waiting) {
      return (
        <>
          <div className="infos">
            <p>
              <i>
                <HiOutlineIdentification />
              </i>
              {props.name}
            </p>
            <div className="status">
              <p className="success">Sucesso: {props.success}</p>
              <p className="error">Erro: {props.total_error}</p>
            </div>
          </div>
          <div className="circle waiting-circle">
            <div className="num">{props.waiting}</div>
          </div>
        </>
      );
    } else {
      return;
    }
  }

  return (
    <div className="swiper-item">
      <div className="col ">
        <div className="info-content">{status()}</div>
        <p className="update-at">Atualização: {props.last_record}</p>
      </div>
    </div>
  );
}
