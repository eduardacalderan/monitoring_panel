import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface StatusProps {
  id: number;
  name: string;
  last_record: string;
  total_error: string;
  success: string;
  waiting: string;
}

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
}

interface StatusContextData {
  pontos: StatusProps[];
  companies: ErrorResponseProps[];
  hospital: ErrorResponseProps;
}

interface StatusProviderProps {
  children: ReactNode;
}

export const DashboardContext = createContext({} as StatusContextData);

export function DataProvider({ children }: StatusProviderProps) {
  const [pontos, setPontos] = useState<StatusProps[]>([]);
  const [companies, setCompanies] = useState<ErrorResponseProps[]>([]);
  const [hospital] = useState<ErrorResponseProps>({} as ErrorResponseProps);

  useEffect(() => {
    const getData = async () => {
      await api.get<StatusProps[]>("pontos").then((response) => {
        setPontos(response.data);
      });
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      api.get<ErrorResponseProps[]>("companies").then((response) => {
        setCompanies(response.data);
      });
    };
    getData();
  }, []);

  return (
    <DashboardContext.Provider value={{ pontos, companies, hospital }}>
      {children}
    </DashboardContext.Provider>
  );
}
