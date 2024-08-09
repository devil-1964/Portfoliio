import React from "react";
import { Send } from "lucide-react";
import { SectionTitle } from "../components";
import { motion } from "framer-motion";
import { leftSideVariants,rightSideVariants } from "../constants/motion";
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [statusText,setStatusText]=React.useState("")
  const formRef =React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setStatusText("The message was sent successfully✅")
          setTimeout(()=>{
            setStatusText("")
            formRef.current.reset()
          },7000)
        },
        () => {
          setStatusText("The message wasn't sent successfully❌")
        },
      );

    };
  

  return (
    <section className="pb-sec-md  pt-sec-lg">
      <div className="container relative flex flex-col items-center gap-y-9 mb-4">
        <SectionTitle title="CONTACT" subtitle="Let's Start Talk" />
      </div>
      <div className="grid w-full grid-cols-1 gap-x-12 md:grid-cols-12">
        <motion.form
        ref={formRef}
        onSubmit={sendEmail}
          variants={leftSideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{margin:"0px 0px -200px 0px", once:true}}
        className="col-span-1 grid grid-cols-1 gap-4 md:col-span-7 md:grid-cols-2" action="">
          <div className="grid gap-y-2">
            <label htmlFor="firstname" className="label">
              First Name
            </label>
            <input
              type="text"
              className="input"
              id="firstname"
              name="first_name"
              placeholder="Jim"
              required
              autoComplete="off"
            />
          </div>
          <div className="grid gap-y-2">
            <label htmlFor="lastname" className="label">
              Last Name
            </label>
            <input
              type="text"
              className="input"
              id="lastname"
              placeholder="Carry"
              name="last_name"
              required
              autoComplete="off"
            />
          </div>
          <div className="grid gap-y-2 md:col-span-2">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              className="input"
              id="email"
              placeholder="jimcarry@email.com"
              name="user_email"
              required
              autoComplete="off"
            />
          </div>
          <div className="grid gap-y-2 md:col-span-2">
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <input
              type="tel"
              className="input"
              id="phone"
              placeholder="9999899998"
              name="user_phone"
              required
              autoComplete="off"
            />
          </div>
          <div className="grid gap-y-2 md:col-span-2">
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              className="input min-h-28 resize-y py-2"
              id="message"
              name="message"
              placeholder="Hi, ..."
              required
            />
          </div>
          {statusText && <p className="text-base font-medium text-gray-90 md:col-span-2">{statusText}</p>}
          <button type="submit" className="btn-primary w-fit flex items-center gap-2">
            Send <Send />
          </button>
        </motion.form>
        <motion.aside
          variants={rightSideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{margin:"0px 0px -200px 0px", once:true}}
        className="col-span-1 hidden flex-col gap-y-6 md:col-span-3 md:flex">
          <div className="flex flex-col gap-y-3">
            <p className="text-lg font-semibold text-gray-90">Further Enquiries</p>
            <a href="mailto:devil1964@proton.me" className="link text-lg text-gray-50">
              devil1964@proton.me
            </a>
            <p className="text-lg font-semibold text-gray-90">Socials</p>
            <a href="https://www.linkedin.com/in/devansh-2aaab1256/" className="link text-lg text-gray-50">
              LinkedIn
            </a>
            <a href="https://x.com/Devansh1Devil" className="link text-lg text-gray-50">
              X (formly Twitter)
            </a>
            <a href="https://github.com/devil-1964" className="link text-lg text-gray-50">
              GitHub
            </a>
            <a href="https://leetcode.com/u/devil-1964/" className="link text-lg text-gray-50">
              LeetCode
            </a>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default Contact;
