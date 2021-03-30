import "./HomePage.css";
import Phone from "../images/phone.svg";

const HomePage = () => {
    return (
        <section className="HomePage">
            <div className="Container">
                <h2>Payments infrastructure for the internet</h2>
                <p className = "Description">Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                <button className="Btn"> Start Now </button>
            </div>
            <img src={Phone} alt="Phone" title="Phone" />
        </section>
    )
}

export default HomePage;