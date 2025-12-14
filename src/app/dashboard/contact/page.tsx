"use client";
import CyberCard from "@/components/CyberCard";
import { Button } from "@/components/ui/button";
import { Mail, Smartphone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // In a real app, you would use a Next.js API route or external service (e.g., Formspree, Resend) here
    console.log("Form Data:", formData);
    
    setTimeout(() => {
        alert("Transmission successful. Your message has been received.");
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const inputClass = "w-full p-3 bg-cyber-border border border-neon-pink/50 text-white placeholder-gray-500 focus:ring-1 focus:ring-neon-blue focus:border-neon-blue transition-all duration-200 rounded-md";

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-neon-blue border-b-4 border-neon-pink/50 pb-2 uppercase tracking-wider">
        // COMMS_TERMINAL
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CyberCard title="SEND SECURE MESSAGE">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neon-blue mb-1">NAME</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Enter your designation" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neon-blue mb-1">EMAIL ADDRESS</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="Enter your comms channel" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neon-blue mb-1">MESSAGE</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className={inputClass} placeholder="Transmit your request or proposal"></textarea>
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full text-lg shadow-lg shadow-neon-blue/30">
                {isSubmitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
              </Button>
            </form>
          </CyberCard>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <CyberCard title="CONTACT PROTOCOLS">
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-neon-pink" />
                <span className="text-gray-300">stefanchan32@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Smartphone className="w-5 h-5 mr-3 text-neon-pink" />
                <span className="text-gray-300">+09912084482 (On Request)</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-neon-pink" />
                <span className="text-gray-300">Cebu City, Philippines</span>
              </li>
            </ul>
          </CyberCard>
        </div>
      </div>
    </div>
  );
}