import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import axios from "../../../AxiosInstance/AxiosInstance";

export const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  // Data fetch using react query
  const {
    isLoading,
    error,
    refetch,
    data: { data: categories } = [],
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return axios.get("/categories");
    },
  });
  const categoryData = {
    isLoading,
    error,
    refetch,
    categories,
  };

  return (
    <CategoriesContext.Provider value={categoryData}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesProvider;
