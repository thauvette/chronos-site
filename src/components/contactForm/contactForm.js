import React, { useContext } from "react"
import { FormContext } from "../../context/formContext"
import "./contact.scss"

const ContactForm = () => {
  const {
    formValues,
    submitForm,
    handleInputChange,
    formIsComplete,
    validateEmail,
    validateMessage,
    formSubmissionState,
    resetFormSubmissionState,
  } = useContext(FormContext)

  if (formSubmissionState.success) {
    return (
      <div className="contact-success">
        <h3>Thanks!</h3>
        <p>Thanks for reaching out. We'll be in touch as soon as we can.</p>
      </div>
    )
  }

  if (formSubmissionState.error) {
    return (
      <div className="contact">
        <h3>Sorry.</h3>
        <p>
          Something went wrong. Please try to{" "}
          <a href="mailto:matt@thauvette.dev">email me.</a> Or
          <button onClick={resetFormSubmissionState} className="btn btn-hollow">
            Try Again
          </button>
        </p>
      </div>
    )
  }
  return (
    <form
      className="contact-form"
      onSubmit={submitForm}
      netlify
      netlify-honeypot="bot-field"
    >
      <div className={`input-container`}>
        <label className={formValues.email.value.length ? "has-value" : ""}>
          <span>Your Email</span>
          <input
            type="email"
            placeholder="Your Email"
            value={formValues.email.value}
            name="email"
            onChange={handleInputChange}
            onBlur={validateEmail}
          />
        </label>
        <span className="error">{formValues.email.error}</span>
      </div>
      <div className={`input-container`}>
        <label className={formValues.message.value.length ? "has-value" : ""}>
          <span>Message</span>
          <textarea
            placeholder="Message"
            name="message"
            onChange={handleInputChange}
            onBlur={validateMessage}
            value={formValues.message.value}
          />
        </label>
        <span className="error">{formValues.message.error}</span>
      </div>
      <input name="honey-pot" type="hidden" onChange={handleInputChange} />
      <button
        className="btn btn-primary"
        type="submit"
        disabled={!formIsComplete()}
      >
        Send
      </button>
    </form>
  )
}

export default ContactForm
