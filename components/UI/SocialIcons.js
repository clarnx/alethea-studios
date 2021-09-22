import "bootstrap-icons/font/bootstrap-icons.css";

const SocialIcons = ({ isNavMenuItem }) => {
    return (
        <span
            className={`nav-item ${isNavMenuItem ? "ms-3" : "list-unstyled"}`}
        >
            <a
                className="bi-facebook text-light px-2"
                href="https://www.facebook.com/Alethea-Studios-100475655717187"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "2rem" }}
            ></a>
            {/* <a
                className="bi-twitter text-light px-2"
                href="#"
                style={{ fontSize: "2rem" }}
            ></a>
            <a
                className="bi-linkedin text-light px-2"
                href="#"
                style={{ fontSize: "2rem" }}
            ></a> */}
            <a
                className="bi-instagram text-light px-2"
                href="https://www.instagram.com/alethea_studios"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "2rem" }}
            ></a>
        </span>
    );
};

export default SocialIcons;
