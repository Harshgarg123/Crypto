import React from "react";
import { motion } from "framer-motion";
import { Mail, PhoneCall, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#0B0E11] py-24 px-4 md:px-20 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-16">
          Have questions, feedback, or partnership ideas? Let’s connect and shape the future of crypto together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
         
          <motion.div
            className="bg-[#12161C] bg-opacity-60 backdrop-blur-md p-8 rounded-2xl border border-[#2c2c2c]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#EEE0FD]">Get In Touch</h3>
            <div className="space-y-6 text-[#A2A3A5]">
              <div className="flex items-center gap-4">
                <Mail className="text-purple-500" />
                <div>
                  <p className="text-sm">Email</p>
                  <p className="font-medium">support@futurifycrypto.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <PhoneCall className="text-yellow-400" />
                <div>
                  <p className="text-sm">Phone</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" />
                <div>
                  <p className="text-sm">Address</p>
                  <p className="font-medium">Blockchain Hub, Bengaluru, India</p>
                </div>
              </div>
            </div>
          </motion.div>

         
          <motion.form
            className="bg-[#12161C] bg-opacity-60 backdrop-blur-md p-8 rounded-2xl border border-[#2c2c2c] space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-[#EEE0FD]">Send Us a Message</h3>
            <div>
              <label className="block text-sm mb-1">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#0B0E11] border border-[#333] text-white focus:border-purple-500 outline-none"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-[#0B0E11] border border-[#333] text-white focus:border-purple-500 outline-none"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Your Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-[#0B0E11] border border-[#333] text-white focus:border-purple-500 outline-none"
                placeholder="Enter your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-[#9145EC] to-[#4700B3] hover:opacity-90 text-white font-semibold rounded-lg transition"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
