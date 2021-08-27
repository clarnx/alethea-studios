import styles from "../../styles/Home.module.css";

const AboutSection = () => {
    return (
        <div
            className={`text-light d-flex align-items-center justify-content-center ${styles.about_section} ${styles.block}`}
            id="about"
        >
            <div className="home_section__text">
                <h3 className="display-3 fw-bold">About Us</h3>
                <p className="mt-2">
                    Our goal as a full-service Marketing Agency is to apply our
                    passionate thinkers and creative team to work closely with
                    each brand to create unique, creative strategies that
                    produce effective results.
                    <br />
                    <br/>
                    Since 2019, Alethea Studios Co Ltd has been working with
                    all-sized companies to help them find their one-of-a-kind
                    message. We were born out of a strong desire to provide
                    brands with the quality creative services they need in order
                    to stay ahead — and we won’t rest until we achieve those
                    results.
                </p>
                <button
                    type="button"
                    className={`btn btn-lg btn-outline-light ${styles.learn_more__btn}`}
                >
                    <a href="#learn_more">Learn More</a>
                </button>
            </div>
        </div>
    );
};

export default AboutSection;
