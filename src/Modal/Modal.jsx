import { Link } from "react-router-dom";
import sublinks from "../data";
import "./Modal.css";
import {FaTimes } from "react-icons/fa";

const Modal = ({ CloseModal }) => {
    return (
        <div className="ModalContainer">
            <div className="Modal">
                <header>
                    <button onClick={CloseModal} className = "Btn" aria-label="Close the Modal"><FaTimes /></button>
                </header>
                <nav>
                    <ul>
                        {sublinks.map(({ page, links }) => {
                            return (
                                <li key={page} className="MainRoute">
                                    <Link to={`/${page}`}>{page}</Link>
                                    <ul>
                                        {links.map(({ label, icon, url }, index) => {
                                            return (
                                                <li key={label + index}>
                                                    <Link to={`/${page}${url}`}> {icon} {label}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Modal