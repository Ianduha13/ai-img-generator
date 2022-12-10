import "./styles/navbar.css"
import { FaGithub, FaBriefcase } from "react-icons/fa"
const Navbar = () => {
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
        <a
          className='navbar-btn'
          href='https://my-portfolio-eta-bice.vercel.app/'
          target={"_blank"}
          rel='noreferrer'
        >
          <FaBriefcase size='1.25em' color='white' />
        </a>
      </div>
    </nav>
  )
}
export default Navbar
