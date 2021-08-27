import styles from "../../styles/Footer.module.css";
import SocialIcons from "./SocialIcons";

const Footer = () => {
    return (
        <div
            className={`bg-dark text-light d-flex flex-column align-items-center justify-content-center gap-3 ${styles.footer}`}
        >   <div><SocialIcons isNavMenuItem={false}/></div>
            <div>©{new Date().getFullYear()} by Alethea Studios</div>
        </div>
    );
};

export default Footer;
