"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { email, location } = portfolioData.profile;
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate sending email
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-violet-500"></div>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Have a project in mind, want to discuss a job role, or just want to say hi? Drop me a message.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Email Box */}
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20 mr-4">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-350">Email Me</h4>
                    <a href={`mailto:${email}`} className="text-sm text-violet-450 hover:underline mt-1 block">
                      {email}
                    </a>
                  </div>
                </div>

                {/* Location Box */}
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20 mr-4">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25g-3 3 0 116 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-350">Location</h4>
                    <p className="text-sm text-slate-300 mt-1">{location}</p>
                  </div>
                </div>

                {/* Response Time Box */}
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/20 mr-4">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-350">Response Time</h4>
                    <p className="text-sm text-slate-300 mt-1">Usually responds within 24 hours.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                      placeholder="Krizza"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                      placeholder="krizzaheart.esperas@gmail.com"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 resize-none"
                    placeholder="Hello Krizza, I'd like to collaborate with you on a new project..."
                  />
                </div>

                {/* Form status states */}
                {status === "success" && (
                  <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-sm text-green-400">
                    Your message has been sent successfully! I will get back to you shortly.
                  </div>
                )}
                {status === "error" && (
                  <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-400">
                    Something went wrong. Please try again later.
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 hover:scale-[1.01] hover:shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
