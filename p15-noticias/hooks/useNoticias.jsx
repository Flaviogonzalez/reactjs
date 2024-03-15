import { useContext } from "react";
import NoticiasContext from "../context/NoticiasProvider";

const UseNoticias = () => {
    return useContext(NoticiasContext)
}

export default UseNoticias