import styles from "../../styles/Home.module.css";

const ServiceDetails = ({ title, subTitle, description, image, bottomBorderColor = "" }) => {
    return (
        <div
            className={`"w-100 min-vh-100 d-flex flex-column flex-lg-row align-items-center justify-content-center" ${styles.service_section__bg_color}`}
            style={{ borderBottom: bottomBorderColor }}
        >
            <div className="w-100 min-vh-100 d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <div className="w-100 w-lg-50 p-5 d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <div className="service_section__text d-flex flex-column align-items-center justify-content-center">
                        <h3
                            className="display-3 fw-bold text-center"
                            style={{ color: "#284359" }}
                        >
                            {title}
                        </h3>
                        <h4
                            className="fw-bold py-3 text-center"
                            style={{ color: "#284359" }}
                        >
                            {subTitle}
                        </h4>
                        <p className="mt-2 mb-0" style={{ color: "#657a89" }}>
                            {description}
                        </p>
                    </div>
                </div>
                <div
                    className={`w-100 w-lg-50 d-none d-lg-block align-self-lg-stretch ${image}`}
                    style={{
                        backgroundSize: "cover",
                        backgroundPsition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ServiceDetails;
