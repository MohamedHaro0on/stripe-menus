import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import SubLinks from "../data";
import logo from "../images/logo.svg";
import Modal from "../Modal/Modal";

import "./Header.css";

const Header = () => {
    const [isOpened, setOpened] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const toggleModal = () => {
        setOpened(prevState => !prevState);
    }
    useEffect(() => {
    })
    return (
        <>
            <header className="Header">
                <nav className="NavBar">

                    <h1>
                        <Link to="/">
                            <img src={logo} alt="Stripe" title="Stripe" />
                        </Link>
                        <button onClick={toggleModal} className="Btn" aria-label="toggle Header"> <FaBars /></button>
                    </h1>


                    <ul className="Routes">
                        {SubLinks.map(({ page }, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/${page}`}>{page}</Link>
                                </li>
                            )
                        })}
                    </ul>
                    <button aria-label="sign In" className="Btn"> Sign In </button>
                </nav>
            </header>
            {isOpened && <Modal CloseModal={toggleModal} />}

        </>
    )
}
export default Header;