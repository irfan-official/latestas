import {
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";

export const Data_Context = createContext();

function DataContext({ children }) {
  const [serviceData, setServiceData] = useState([]);
  const [loader, setLoader] = useState(true);


  const DataFetching = useCallback(async () => {
    try {
      setLoader(true);
      const res = await fetch("/service.json"); // ✅ ensure file is in /public folder
      if (!res.ok) throw new Error("Failed to load data");
      const data = await res.json();
      setServiceData(data);

    } catch (error) {
      console.error("Error fetching service data:", error);
      alert(error.message);
    } finally {
      setLoader(false);
    }
  }, []);

  useMemo(() => {
    DataFetching();
  }, [DataFetching]);

  return (
    <Data_Context.Provider
      value={{ serviceData, loader, setLoader, DataFetching }}
    >
      {children}
    </Data_Context.Provider>
  );
}

export default DataContext;
