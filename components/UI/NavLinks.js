import Link from "next/link";
import SocialIcons from "./SocialIcons";

const NavLinks = () => {
    return (
        <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
        >
            <div className="navbar-nav text-center align-items-center">
                <Link href="/">
                    <a
                        className="nav-link active text-light"
                        aria-current="page"
                    >
                        Home
                    </a>
                </Link>
                <Link href="/#about">
                    <a className="nav-link text-light">About</a>
                </Link>
                <Link href="/#plans_and_pricing">
                    <a className="nav-link text-light">Plans & Pricing</a>
                </Link>

                <Link href="/terms-and-conditions">
                    <a className="nav-link text-light">Terms & Conditions</a>
                </Link>

                <Link href="/#contact" passHref>
                    <a className="nav-link text-light">Contact</a>
                </Link>
                <SocialIcons isNavMenuItem={true} />
            </div>
        </div>
    );
};

export default NavLinks;
