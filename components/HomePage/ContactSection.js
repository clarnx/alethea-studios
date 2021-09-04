import ContactForm from "../UI/ContactForm";
import SocialIcons from "../UI/SocialIcons";
import styles from "../../styles/Home.module.css";

const ContactSection = () => {
    return (
        <div
            className={`"w-100 d-flex flex-column flex-lg-row align-items-center justify-content-center" ${styles.contact_section__bg_color}`}
            id="contact"
        >
            <div className="w-100 container d-flex flex-column flex-lg-row align-items-center justify-content-center py-5 px-3 gap-3 text-light">
                <div className="w-100 w-lg-50">
                    <div className="contact_section__text">
                        <h3 className="display-3 fw-bold">Connect With Us</h3>
                        <p className="mt-2 mb-0">
                            Want to work with us? We’d love to hear from you.
                            HS/No 7, Gold Avenue Street, Old Ashonmang.
                        </p>
                        <span className="d-flex align-items-center">
                            <i
                                className="bi bi-telephone-fill pe-2"
                                style={{ fontSize: "2rem" }}
                            ></i>
                            0241573667
                        </span>
                        <SocialIcons isNavMenuItem={false} />
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactSection;
