"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to send");
    reset();
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-[#06b6d4] text-sm tracking-widest uppercase mb-3 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f1f5f9] dark:text-[#f1f5f9] mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-[#94a3b8] max-w-lg mx-auto">
            Have a project in mind, or just want to talk AI? I&apos;m open to opportunities, collaborations, and interesting conversations.
          </p>
          <a
            href="mailto:muhammadazisrasyid@gmail.com"
            className="inline-block mt-4 text-[#06b6d4] font-mono text-sm hover:underline"
          >
            muhammadazisrasyid@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="p-8 rounded-2xl bg-[#1e293b] border border-[#334155]"
        >
          {isSubmitSuccessful ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[#f1f5f9] font-bold text-lg mb-2">Message sent!</h3>
              <p className="text-[#94a3b8] text-sm">I&apos;ll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#94a3b8] text-sm font-medium mb-2">Name</label>
                  <input
                    {...register("name")}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0f172a] border text-[#f1f5f9] text-sm placeholder-[#475569] focus:outline-none transition-colors ${
                      errors.name ? "border-red-500" : "border-[#334155] focus:border-[#06b6d4]"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-400 text-xs">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[#94a3b8] text-sm font-medium mb-2">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0f172a] border text-[#f1f5f9] text-sm placeholder-[#475569] focus:outline-none transition-colors ${
                      errors.email ? "border-red-500" : "border-[#334155] focus:border-[#06b6d4]"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-400 text-xs">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[#94a3b8] text-sm font-medium mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#0f172a] border text-[#f1f5f9] text-sm placeholder-[#475569] focus:outline-none transition-colors resize-none ${
                    errors.message ? "border-red-500" : "border-[#334155] focus:border-[#06b6d4]"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-red-400 text-xs">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full py-3 rounded-xl bg-[#06b6d4] text-[#0f172a] font-bold text-sm hover:bg-[#06b6d4]/90 disabled:opacity-60 transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
