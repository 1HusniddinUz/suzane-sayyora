import "../../assets/Navbar.css"
const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="logo_box">
                <h1>
                    By Sayyora
                </h1>
            </div>
            <div className="nav_links">
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Products</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Contacts</li></a>
                </ul>
            </div>
            <div className="lang_provider">
                <select>
                    <option value="uz">O'zbek</option>
                    <option value="en">English</option>
                    <option value="ru">Русский</option>
                </select>
            </div>
        </div>
    </nav>
  )
}

export default Navbar