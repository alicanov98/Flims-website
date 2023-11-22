import { Header } from "@/components/header";
import "@/styles/reset.css";
import "@/styles/global.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head/>
      <body >
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  )
}

//! VIDEO 20