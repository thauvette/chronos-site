import React, { createContext, useState } from "react"

const initialState = {
  email: {
    value: "",
    error: null,
  },
  message: {
    value: "",
    error: null,
  },
}
const FormContext = createContext(initialState)

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function FormProvider({ children }) {
  const [formValues, setFormValues] = useState(initialState)

  const [formSubmissionState, setFormSubmissionState] = useState({
    loading: false,
    error: null,
    success: false,
  })

  function submitForm(e) {
    e.preventDefault()
    setFormSubmissionState({ ...formSubmissionState, loading: true })
    if (!formValues["honey-pot"] && validateEmail() && validateMessage()) {
      const values = {
        email: formValues.email.value,
        message: formValues.message.value,
      }

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "Contact Form", ...values }),
      })
        .then(() => {
          setFormSubmissionState({ loading: false, error: null, success: true })
        })
        .catch(error =>
          setFormSubmissionState({
            loading: false,
            error: "Could not submit",
            success: false,
          })
        )
    }
  }

  const resetFormSubmissionState = () => {
    setFormSubmissionState({ loading: false, error: null, success: false })
  }

  const handleInputChange = e => {
    const newValues = {
      ...formValues,
      [e.target.name]: {
        value: e.target.value,
        error: null,
      },
    }
    setFormValues(newValues)
  }

  const formIsComplete = () => {
    return Boolean(
      Object.entries(formValues).every(([key, field]) => {
        return key === "honey-pot" ? true : field.value.length && !field.error
      })
    )
  }

  const validateEmail = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.value)) {
      setFormValues({
        ...formValues,
        email: {
          ...formValues.email,
          error: "That email doesn't look quite right?",
        },
      })
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.value)
  }

  const validateMessage = () => {
    if (formValues.message.value.length < 10) {
      setFormValues({
        ...formValues,
        message: {
          ...formValues.message,
          error: "Is that all you have to say?",
        },
      })
    }
    return Boolean(formValues.message.value.length >= 10)
  }

  return (
    <FormContext.Provider
      value={{
        formValues,
        submitForm,
        handleInputChange,
        formIsComplete,
        validateEmail,
        validateMessage,
        formSubmissionState,
        resetFormSubmissionState,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export { FormContext, FormProvider }
