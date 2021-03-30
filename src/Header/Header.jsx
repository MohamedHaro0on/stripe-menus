import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import SubLinks from "../data";

import logo from "../images/logo.svg";
import "./Header.css";

const Header = () => {
    const [isOpened, setOpened] = useState(false);
    const [windowWidth, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWidthChange = () => {
            let width = window.innerWidth;
            setWidth(width);
            if (width < 851) {
                setOpened(false)
            }
        }
        window.addEventListener("resize", handleWidthChange);
        return () => window.removeEventListener("resize", handleWidthChange);
    })

    const toggleModal = () => {
        setOpened(prevState => !prevState);
    }

    return (
        <>
            <header className="Header">
                <navbar className="NavBar">
                    <h1>
                        <Link to="/">
                            <img src={logo} alt="Stripe" title="Stripe" />
                        </Link>
                        <button onClick={toggleModal} className="Btn" aria-label="toggle Header"> <FaBars /></button>
                    </h1>

                    <ul className="Routes">
                        {SubLinks.map(({page}, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/${page}`}>{page}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <button aria-label="sign In" className="Btn"> Sign In </button>
                </navbar>
            </header>

            {isOpened && <div className = "Modal"> this is the Modal </div>}

        </>
    )
}
export default Header;