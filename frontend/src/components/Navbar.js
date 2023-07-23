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
                <Link to="/about">
                    <h1>About</h1>
                </Link>
                <Link to="/login">
                    <h1>Login</h1>
                </Link>
                <Link to="/register">
                    <h1>Register</h1>
                </Link>
                <Link to="/test">
                    <h1>Test</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar