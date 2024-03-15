import { useContext } from "react";
import CotizadorContext from "../context/CotizadorContext";

export const useCotizador = () => {
    return useContext(CotizadorContext)
}

