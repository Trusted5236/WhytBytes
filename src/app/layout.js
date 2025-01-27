import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./Compnents/TopBar";
import SideBar from "./Compnents/SideBar";
import { FormProvider } from "./Compnents/FormContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <FormProvider>
       <div>
          <TopBar />
        </div>

        <div className="w-full h-auto flex flex-row ">

        <div className="w-[17%] md:w-[20%]">
          <SideBar />
        </div>

        <div className="w-[83%] md:w-[80%] px-4">
        {children}
        </div>

        </div>
       </FormProvider>
      </body>
    </html>
  );
}
