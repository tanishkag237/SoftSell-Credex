import { ContactUs } from "@/components/Contactus";
import Hero from "@/components/Hero";
import { Howitworks } from "@/components/Howitworks";

import { Whychooseus } from "@/components/Whychooseus";
import Footer from "../components/Footer";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
  return (
    <div className="w-80%">
      <Hero />
      <Howitworks />
      <Whychooseus />
      <br />
      <Testimonials />
      <ContactUs />
      <Footer/>
    </div>
  );
}
