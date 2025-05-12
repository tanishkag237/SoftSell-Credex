"use client"

import { toast } from "sonner";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Label } from "@/app/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Input } from "./ui/input";
import { useState } from "react";
import { Cover } from "./ui/cover";

export function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [license, setLicense] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation: check if all fields are filled
    if (!name || !email || !company || !license) {
      toast.error("Please fill all the fields.");
      return;
    }

    // Show success toast after form submission
    toast.success("Thanks for reaching out! We will get back to you soon.");

    // Reset form fields after submission
    setName("");
    setEmail("");
    setCompany("");
    setLicense("");
  };

  return (
    <>
    <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            <Cover>Contact Us</Cover>
    </h1>
    
    <div
      className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-cover bg-center px-4 py-9 gap-9" id="contact-us"
      style={{
        backgroundImage: "url('/bg2.webp')",
      }}

    >
    
      {/* Left Content */}
      <div className="text-black max-w-md space-y-6 bg-white p-5 rounded-2xl h-[28rem]">
        <h2 className="text-4xl font-bold">Let&apos;s Connect</h2>
        <p className="text-lg">
          Have a question, proposal, or just want to say hello? Fill out the form and we&apos;ll get back to you as soon as possible.
        </p>
        <ul className="space-y-2 text-base">
          <li>📧 Email: contact@softsell.com</li>
          <li>📞 Phone: +91 98765 43210</li>
          <li>📍 Gurugram, Haryana</li>
        </ul>
        <p className="text-sm text-gray-500">We typically respond within 24 hours.</p>
      </div>

      {/* Right Form */}
      <Card className="w-full max-w-md bg-transparent text-white backdrop-blur-md">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  placeholder="Your company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="license">License</Label>
                <Select
                  value={license}
                  onValueChange={(value) => setLicense(value)}
                >
                  <SelectTrigger id="license">
                    <SelectValue className="placeholder" placeholder="Select license type" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <CardFooter className="flex justify-end">
              <Button type="submit">Apply</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
