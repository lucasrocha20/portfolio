'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { slideIn } from '../utils/motion'
import { SectionWrapper } from '@/hoc/SectionWrapper'
import { Send as SendIcon } from '@mui/icons-material'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        process.env.SERVICE_ID_EMAILJS!, // paste your ServiceID here.
        process.env.TEMPLATE_ID_EMAILJS!, // paste your TemplateID here.
        {
          from_name: form.name,
          to_name: 'Lucas Rocha',
          from_email: form.email,
          to_email: 'lucas_rocha.14@outlook.com',
          message: form.message,
        },
        process.env.PUBLIC_KEY_EMAILJS,
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you. I will get back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        () => {
          setLoading(false)
          alert('Something went wrong. Please try again.')
        },
      )
      .catch(() => {
        setLoading(false)
        alert('Something went wrong. Please try again.')
      })
  }

  return (
    <section
      id="contact"
      className="mt-[8rem] flex max-w-[1280px] flex-col-reverse gap-10 overflow-hidden xl:flex-row"
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] rounded-2xl bg-blue-400 p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-timberWolf">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="rounded-lg border-none bg-eerieBlack px-6 py-4 font-medium text-timberWolf outline-none placeholder:text-taupe"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-timberWolf">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="rounded-lg border-none bg-eerieBlack px-6 py-4 font-medium text-timberWolf outline-none placeholder:text-taupe"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-timberWolf">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="resize-none rounded-lg border-none bg-eerieBlack px-6 py-4 font-medium text-timberWolf outline-none placeholder:text-taupe"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex h-[45px] w-[100px] items-center justify-center gap-3 whitespace-nowrap rounded-[10px] bg-night py-5 font-beckman text-[16px] font-bold text-timberWolf transition duration-[0.2s] ease-in-out hover:bg-battleGray hover:text-eerieBlack sm:h-[50px] sm:w-[130px] sm:gap-4 sm:text-[20px]"
          >
            {loading ? 'Sending' : 'Send'}

            <SendIcon className="text-white-100" fontSize="small" />
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export default SectionWrapper(Contact)
