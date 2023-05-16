const Contact = () => {
  return (
    <div className="flex flex-col mb-auto items-center">
      <h3>contact us</h3>
      <form className="w-3/5">
        <div>
          <label htmlFor="name">
            Name <input type="text" id="name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input type="text" id="email" />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Message{' '}
            <textarea name="" id="message" cols="30" rows="10"></textarea>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Contact
