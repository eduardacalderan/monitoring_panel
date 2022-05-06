import "./styles.scss";

export function SettingsContent() {
  return (
    <div className="settings-content">
      {" "}
      <form action="/" method="POST" className="form">
        <div className="form-header-container">
          <div className="form-header">
            <label htmlFor="input">ID: </label>
            <div>
              <input type="text" placeholder="ID" className="id" />
            </div>
          </div>
          <div className="form-header">
            <label htmlFor="input">Empresa:</label>
            <div>
              {" "}
              <input type="text" placeholder="Empresa" className="company" />
            </div>
          </div>
          <div className="form-header">
            <label htmlFor="input">Fluxo:</label>
            <div>
              {" "}
              <select name="fluxo" id="fluxo" className="flow-1">
                <option value="Opção 1">Opção 1</option>
                <option value="Opção 2">Opção 2</option>
              </select>
            </div>
          </div>
          <div className="form-header form-header-status">
            <label htmlFor="fluxo">Status:</label>
            <div>
              {" "}
              <select name="fluxo" id="fluxo" className="flow-2">
                <option value="Opção 1">Opção 1</option>
                <option value="Opção 2">Opção 2</option>
              </select>
            </div>
          </div>
        </div>

        <div className="form-body-container">
          <input type="text" placeholder="Código" className="code" />
          <div className="border"></div>
          <input
            type="text"
            placeholder="Ponto de Integração"
            className="integration-point"
          />
          <div className="border"></div>
          <input
            type="text"
            placeholder="SQL Aguardando"
            className="sql-waiting"
          />
          <div className="border"></div>
          <input
            type="text"
            placeholder="SQL Sucesso"
            className="sql-success"
          />
          <div className="border"></div>
          <input
            type="text"
            placeholder="SQL Agrupado"
            className="sql-grouped"
          />
          <div className="border"></div>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}
