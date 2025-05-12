import { useContext } from "react";
import { UserContext } from "./Usercontext";



export const useUser = () => {
    const context =  useContext(UserContext)
    if(!context) throw Error("user must be used inside UserContextProvider")
        return context
}