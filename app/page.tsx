"use client";

import Head from "next/head";
import TopBar from "./components/Topbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const NavigateLoginClick = () => {
     router.push("/signin");
  };
  const NavigateSignupClick = () => {
     router.push("/signup");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>My Landing Page</title>
        <meta name="description" content="A stunning landing page built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <TopBar handleLoginClick={NavigateLoginClick} handleSignupClick={NavigateSignupClick} />
      <Body />
      <Footer/>
      </> 
    </div>
  );
}
