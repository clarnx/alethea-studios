import styles from "../../styles/Home.module.css";

const ServicesSection = () => {
    return (
        <div
            className={`text-light d-flex align-items-center justify-content-center ${styles.services_section} ${styles.block}`}
        >
            <div className="home_section__text">
                <h3 className="display-3 fw-bold">Our Services</h3>
                <p className="mt-2">
                    <span className="fw-bold">Let’s Work Together</span>
                    <br />
                    <br />
                    Since 2019, we’ve been dedicated to crafting creative
                    strategies that shape and ignite brand acceleration. From
                    concept ideation to execution, Alethea Studios is here to
                    help you every step of the way.
                </p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item list_transparent">
                        <i className="bi bi-check-circle-fill me-2 icon_color__green"></i>
                        Logos & Branding
                    </li>
                    <li className="list-group-item list_transparent">
                        <i className="bi bi-check-circle-fill me-2 icon_color__green"></i>{" "}
                        Print Design & Marketing
                    </li>
                    <li className="list-group-item list_transparent">
                        <i className="bi bi-check-circle-fill me-2 icon_color__green icon_color"></i>
                        Website Design
                    </li>
                    <li className="list-group-item list_transparent">
                        <i className="bi bi-check-circle-fill me-2 icon_color__green"></i>{" "}
                        Social Media Marketing / Advertising
                    </li>
                    <li className="list-group-item list_transparent">
                        <i className="bi bi-check-circle-fill me-2 icon_color__green"></i>{" "}
                        2D & 3D Animation, Motion graphic, Video Production
                    </li>
                    <li className="list-group-item list_transparent">
                        <i className="bi bi-check-circle-fill me-2 icon_color__green"></i>{" "}
                        Web & Mobile Application Development
                    </li>
                    <li className="list-group-item list_transparent">
                        <i className="bi bi-check-circle-fill me-2 icon_color__green"></i>{" "}
                        TickTok Ads
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ServicesSection;
