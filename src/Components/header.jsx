import { Link } from "react-router-dom";
const Header = ({ title }) => {

  const handleclick = () => {
    console.log("you clicked me");
  }
  const butcol = (col) => {
    col = "green"
    return col
  }

  const butstyle = 
    {
      backgroundColor: butcol(),
      color: "white"
    }

    Header.defaultProps = {
      title: "default titile"
    }

  return (

      <header className="head">
        <nav className="navbar">
          <h1>{title}</h1>
          <ul className="youel">
            <li className="eli">
              <Link to = "/">HOME</Link>
            </li>
            <li className="eli">
              <Link to = "/About">ABOUT</Link>
            </li>
            <li className="eli">
              <Link to = "/Services">SERVICES</Link>
            </li>
            <li className="eli">
              <Link to = "/Contact-us">CONTACT US</Link>
            </li>
            <li className="eli">
              <Link to = "/Account">ACCOUNT</Link>
            </li>
          </ul>
          <button className="navbut" style={butstyle} onClick = {handleclick}>LOGIN</button>
        </nav>

      </header>

  )
  
}


export default Header