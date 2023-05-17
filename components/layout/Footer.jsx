import { faEnvelope, faFaceAngry } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className="p-3 bg-slate-200">
      <ul
        className=" flex flex-col items-center tracking-widest sm:tracking-normal 
      md:flex-row md:justify-between"
      >
        <li>&copy; {new Date().getFullYear()} Oskars Barbers</li>
        <li>184 high street Herne Bay, Kent CT6 5AP</li>

        <li>
          <phoneIcon />
          <a href="tel:07447008787">07447 008787</a>
        </li>
        <li>
          <a href="http://www.facebook.com/oskarsbarbers" target="oskars">
            Follow us on Facebook
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
