import React from "react"
import { FormProvider } from "../context/formContext"
import ContactForm from "../components/contactForm/contactForm"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout title="Get in touch">
      <SEO title="Contact" />

      <FormProvider>
        <ContactForm />
      </FormProvider>
    </Layout>
  )
}

export default Contact
