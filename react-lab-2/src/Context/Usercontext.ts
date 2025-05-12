
import React, {createContext} from "react"


export type UserContextType = {
    fullname: string,
    setFullname:  React.Dispatch<React.SetStateAction<string>>
    loggedIn: boolean
   setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}


export const UserContext = createContext<UserContextType>({
   fullname: '',
   setFullname: () => {},
   loggedIn: false,
   setIsLogin: () => {}
}) 