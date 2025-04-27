"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/data/profile";
import { useLanguage } from "@/components/providers/language-provider";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const { dictionary } = useLanguage();
  const profile = useProfile();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to a server here
    console.log("Form submitted:", formData);
    
    // For demo purposes, we'll just clear the form and show success message
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    setSubmitted(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <section className="pt-28 pb-20 bg-theme-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{dictionary.contact.title}</h1>
            <p className="text-lg text-secondary">
              {dictionary.contact.description}
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-1 bg-theme-contact-card rounded-lg shadow-md p-6"
            >
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-6">{dictionary.contact.contact_info}</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 mt-1 text-theme-icon" />
                      <div>
                        <h3 className="font-medium mb-1">{dictionary.contact.email}</h3>
                        <p className="text-sm text-secondary">
                          {profile.contactEmail}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 mt-1 text-theme-icon" />
                      <div>
                        <h3 className="font-medium mb-1">{dictionary.contact.phone}</h3>
                        <p className="text-sm text-secondary">
                          +86 13800138000
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 mt-1 text-theme-icon" />
                      <div>
                        <h3 className="font-medium mb-1">{dictionary.contact.location}</h3>
                        <p className="text-sm text-secondary">
                          {dictionary.contact.location_value}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">{dictionary.footer.social_media}</h2>
                  <div className="flex gap-3">
                    {/* Social media links would go here */}
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-2 bg-theme-contact-card rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-bold mb-6">{dictionary.contact.send_message}</h2>
              
              {submitted ? (
                <div className="bg-theme-success border border-theme-success text-theme-success rounded-md p-4 mb-6">
                  <p>{dictionary.contact.success_message}</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      {dictionary.contact.your_name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-theme-input rounded-md bg-transparent"
                      placeholder={dictionary.contact.your_name}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      {dictionary.contact.your_email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-theme-input rounded-md bg-transparent"
                      placeholder={dictionary.contact.your_email}
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                    {dictionary.contact.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-theme-input rounded-md bg-transparent"
                    placeholder={dictionary.contact.subject}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    {dictionary.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-theme-input rounded-md bg-transparent"
                    placeholder={dictionary.contact.message}
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full md:w-auto">
                  {dictionary.contact.send}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
} 