import styles from "../../styles/Home.module.css";

const StorySection = () => {
    return (
        <div
            className={`text-light d-flex align-items-center justify-content-center ${styles.story_section} ${styles.block}`}
            id="learn_more"
        >
            <div className="home_section__text">
                <h3 className="display-3 fw-bold">Our Story</h3>
                <p className="mt-2">
                    <span className="fw-bold">Creating to Inspire</span>
                    <br />
                    <br />
                    We’re passionate about helping brands find their creative
                    voice. Founded in 2019, our one-stop Marketing Agency aims
                    to help our clients thrive in a changing omni channel world
                    and leverage their unique strengths to build a personalized
                    roadmap to success. We’re here to make your life easier —
                    talk to us about how we can help.
                </p>
            </div>
        </div>
    );
};

export default StorySection;
