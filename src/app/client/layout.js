"use client"
import NavaBar from "@/components/client/NavaBar";
//import {SessionProvider} from "next-auth/react";
import {SessionProvider} from "next-auth/react";
import { CartProvider } from "use-shopping-cart";
export default function ClientLayout({ children,session }) {
    return (
    <>
    <SessionProvider session={session}>
    <CartProvider
        // Enables local storage
        shouldPersist={true}
        >       
    <NavaBar/>
    {children}
    </CartProvider>
    </SessionProvider>
 
    </>
    )
    }