import CardList from "./CardList";

const PriceListSection = () => {
    return (
        <div
            className="container py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center"
            id="plans_and_pricing"
        >
            <h3
                className="display-3 fw-bold text-center"
                style={{ color: "#284359" }}
            >
                Price List
            </h3>
            <h4
                className="fw-bold py-3 text-center"
                style={{ color: "#657a89" }}
            >
                Available Now
            </h4>
            <CardList />
        </div>
    );
}

export default PriceListSection
