const CardDetailsItem = ({
    price,
    planType,
    children,
    deliveryNumber,
    revisionNumber,
}) => {
    return (
        <div className="col">
            <div className="card h-100 text-center border-light shadow-lg">
                <div className="card-body">
                    <h5
                        className="card-title fw-bold fs-1"
                        style={{ color: "#284359" }}
                    >
                        ${price}
                    </h5>
                    <h5
                        className="my-3 text-decoration-underline"
                        style={{ color: "#657a89" }}
                    >
                        {planType}
                    </h5>
                    <div className="card-text" style={{ color: "#284359" }}>
                        <ul className="list-unstyled">{children}</ul>
                    </div>
                </div>
                <div className="card-footer text-muted small fw-bold gx-5">
                    <span>
                        <i className="bi bi-box-seam"></i> {deliveryNumber} Days
                        Delivery
                    </span>
                    <span className="mx-2"></span>
                    <span>
                        <i className="bi bi-list-check"></i> {revisionNumber}{" "}
                        {revisionNumber > 1 ? "Revisions" : "Revision"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardDetailsItem;
