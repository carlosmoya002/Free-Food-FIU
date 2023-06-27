import { Link } from "react-router-dom"

const Navbar = () => {

    return(
        <header>
            <div className="container">
            <Link to="/">
                    <h1>Create</h1>
                </Link>
                <Link to="/search">
                    <h1>Search</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar