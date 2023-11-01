
import NavaBar from "@/components/client/NavaBar";
//import {SessionProvider} from "next-auth/react";
export default function ClientLayout({ children }) {
    return (
    <>
    
    <NavaBar/>
    {children}
 
    </>
    )
    }