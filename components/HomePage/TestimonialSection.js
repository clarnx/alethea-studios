import TestimonialList from "./TestimonialList";
import dynamic from "next/dynamic";
import testimonials from "../../data/testimonials";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestimonialItem from "./TestimonialItem";

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const TestimonialSection = () => {
    return (
        <div className="gtco-testimonials py-5">
            <h4
                className="fw-bold py-3 text-center"
                style={{ color: "#657a89" }}
            >
                What Our Customers Say About Us.
            </h4>
            <TestimonialList />
        </div>
    );
};

export default TestimonialSection;
