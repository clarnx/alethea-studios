import AboutSection from "../components/HomePage/AboutSection";
import ContactSection from "../components/HomePage/ContactSection";
import Hero from "../components/HomePage/Hero";
import PriceListSection from "../components/HomePage/PriceListSection";
import ServiceInfoSection from "../components/HomePage/ServiceInfoSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import StorySection from "../components/HomePage/StorySection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import Layout from "../components/UI/Layout";

export default function Home() {
    return (
        <Layout title="Home - Alethea Studios">
            <Hero />
            <AboutSection />
            <StorySection />
            <ServicesSection />
            <ServiceInfoSection />
            <PriceListSection />
            <TestimonialSection/>
            <ContactSection />
        </Layout>
    );
}
