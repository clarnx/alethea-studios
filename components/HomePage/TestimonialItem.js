const TestimonialItem = ({ testimonialText }) => {
    return (
        <div>
            <div className="t-card text-center d-flex align-items-center justify-content-center">
                <div className="card-body">
                    <blockquote className="blockquote">
                        <p className="card-text fs-6">
                            <span className="fw-bolder">“</span>{" "}
                            {testimonialText}{" "}
                            <span className="fw-bolder">”</span>
                        </p>
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;
