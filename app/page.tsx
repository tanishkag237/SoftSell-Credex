import { ContactUs } from "@/app/components/Contactus";
import Hero from "@/app/components/Hero";
import { Howitworks } from "@/app/components/Howitworks";

import { Whychooseus } from "@/app/components/Whychooseus";
import Footer from "./components/Footer";
import { Testimonials } from "@/app/components/Testimonials";
import { ChatWidget } from "./components/ChatWidget";


export default function Home() {
  return (
    <div className="w-80%">
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
