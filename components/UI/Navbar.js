import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/alethea_studios__logo.jpg";
import NavLinks from "./NavLinks";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
    return (
        // <nav className="navbar sticky-top shadow-lg navbar-expand-lg navbar-bg py-4">
        //     <div className="container">
        //         <a className="navbar-brand d-flex align-items-center" href="#">
        //
        //         </a>
        //         <NavLinks />
        //     </div>
        // </nav>

        //  <ul className="navbar-nav ms-auto">
        //                     <li className="nav-item">
        //                         <Link href="/">
        //                             <a
        //                                 className="nav-link text-light active"
        //                                 aria-current="page"
        //                             >
        //                                 Home
        //                             </a>
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link href="/#about">
        //                             <a className="nav-link text-light">About</a>
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link href="/#plans_and_pricing">
        //                             <a className="nav-link text-light">
        //                                 Plans & Pricing
        //                             </a>
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link href="/terms-and-conditions">
        //                             <a className="nav-link text-light">
        //                                 Terms & Conditions
        //                             </a>
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link href="/#contact" passHref>
        //                             <a className="nav-link text-light">Contact</a>
        //                         </Link>
        //                     </li>
        //                     <SocialIcons isNavMenuItem={true} />
        //                 </ul>

        <nav className="navbar sticky-top shadow navbar-expand-lg navbar-bg py-4 navbar-dark">
            <div className="container">
                <Link href="/" passHref>
                    <a className="navbar-brand d-flex align-items-center">
                        <Image src={Logo} alt="" />
                    </a>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLinks/>
            </div>
        </nav>
    );
};

export default Navbar;
