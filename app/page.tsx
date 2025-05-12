import { ContactUs } from "@/app/components/Contactus";
import Hero from "@/app/components/Hero";
import { Howitworks } from "@/app/components/Howitworks";

import { Whychooseus } from "@/app/components/Whychooseus";
import Footer from "./components/Footer";
import { Testimonials } from "@/app/components/Testimonials";
import { ChatWidget } from "./components/ChatWidget";
import Head from "next/head";


export default function Home() {
  return (
    <div className="w-80%">
       <Head>
        <title>SoftSell - Sell Your Unused Software</title>
        <meta name="description" content="Sell your unused software on SoftSell. Find a platform to buy or sell unused software efficiently." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="software, sell software, unused software, SoftSell, buy software" />
        <meta name="author" content="SoftSell Team" />
        
        <meta property="og:title" content="SoftSell - Sell Your Unused Software" />
        <meta property="og:description" content="Sell your unused software on SoftSell. Find a platform to buy or sell unused software efficiently." />
        <meta property="og:url" content="https://www.softsell.com" />
        <meta property="og:site_name" content="SoftSell" />
        <meta property="og:locale" content="en_US" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero />
       <ChatWidget />
      <Howitworks />
      <Whychooseus />
      <br />
      <Testimonials />
      <ContactUs />
      <Footer/>
    </div>
  );
}
