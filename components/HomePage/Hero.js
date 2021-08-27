import styles from "../../styles/Home.module.css";

const Hero = () => {
    return (
        <div className={`text-light ${styles.hero}`}>
            <div className="h-75 d-flex flex-column justify-content-center align-items-center">
                <h1 className="display-2 fw-bold text-center">
                    Propel Your Brand <br />
                    With Alethea Studios
                </h1>
                <h2 className="display-6 text-center">
                    A No-Limit Digital Marketing Agency
                </h2>
            </div>

            <div
                className="h-25 d-flex justify-content-center align-items-center"
                style={{ backgroundColor: "rgba(255,255,255, 0.2)" }}
            >
                <p className="mt-4 hero_bottom__paragraph">
                    At Alethea Studios Co Ltd, we believe in the power of ideas.
                    We thrive on making a difference to brands and helping
                    companies make powerful audience connections and increased
                    revenues
                </p>
            </div>
        </div>
    );
};

export default Hero;
