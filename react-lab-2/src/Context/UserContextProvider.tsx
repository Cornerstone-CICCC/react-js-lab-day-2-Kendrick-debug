import {  useState } from "react";
import { UserContext } from "./Usercontext";

export const UserContextProvider = ({ children }: { children: React.ReactNode}) =>   {
const [fullname, setFullname] = useState<string>('')
const [loggedIn, setIsLogin] = useState<boolean>(false)

return (
    <UserContext.Provider value={{ fullname, setFullname, loggedIn, setIsLogin }}>
        {children}
    </UserContext.Provider>
)   

}