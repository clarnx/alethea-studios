import TestimonialItem from "./TestimonialItem";
import dynamic from "next/dynamic";
import testimonials from "../../data/testimonials";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const TestimonialList = () => {
    return (
        <OwlCarousel
            className="owl-carousel owl-theme"
            loop
            center
            autoplay
            margin={0}
            responsiveClass
            nav={false}
            responsive={{
                0: {
                    items: 1,
                    nav: false,
                },
                680: {
                    items: 2,
                    nav: false,
                    loop: false,
                },
                1000: {
                    items: 3,
                    nav: true,
                },
            }}
        >
            {testimonials.map((value, index) => (
                <TestimonialItem key={index} testimonialText={value} />
            ))}
        </OwlCarousel>
    );
};

export default TestimonialList;
