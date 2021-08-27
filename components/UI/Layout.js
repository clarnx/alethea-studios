import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ title, keywords, description, children }) => {
    return (
        <div className="lh-lg">
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
