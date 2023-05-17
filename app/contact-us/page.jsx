import ContactForm from '@components/ContactForm'

const Contact = () => {
  return (
    <div className="flex flex-col mb-auto items-center">
      <ContactForm />
      <iframe
        className="m-8 md:rounded-xl w-full md:w-11/12"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.7263139195184!2d1.128480115764971!3d51.37132787961298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d93562e44b632f%3A0x8e32eeadcda91d61!2s184%20High%20St%2C%20Herne%20Bay%20CT6%205AP!5e0!3m2!1sen!2suk!4v1589709769718!5m2!1sen!2suk"
        width="600"
        height="500"
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  )
}

export default Contact
