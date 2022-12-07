import "./styles/navbar.css"
import { FaGithub, FaMoon, FaSun } from "react-icons/fa"
const Navbar = ({ theme, handleThemeChange }) => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <header>Img IA Generator</header>
      </div>
      <div className='navbar-right'>
        <a
          className='navbar-btn'
          href='https://github.com/Ianduha13?tab=repositories'
          target={"_blank"}
          rel='noreferrer'
        >
          <FaGithub size='1.25em' color='white' />
        </a>
        <button className='navbar-btn' onClick={handleThemeChange}>
          {theme === "light" ? (
            <FaMoon size='1.25em' color='white' />
          ) : (
            <FaSun size='1.25em' color='white' />
          )}
        </button>
      </div>
    </nav>
  )
}
export default Navbar
