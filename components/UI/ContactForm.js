import { useState } from "react";
import handleOnFormSubmit from "../../utils/handleOnFormSubmit";

const ContactForm = () => {
    
    return (
        <div className="w-100 w-lg-50">
            <form className="row g-3" onSubmit={handleOnFormSubmit}>
                <div className="col-md-6">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name-input"
                        placeholder="Name"
                        required
                        minLength="3"
                        maxLength="50"
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email-input"
                        placeholder="Email"
                        required
                        minLength="3"
                        maxLength="100"
                    />
                </div>

                <div className="col-md-6">
                    <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        id="tel-input"
                        placeholder="Phone"
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        id="address-input"
                        placeholder="Address"
                    />
                </div>
                <div className="col-12">
                    <input
                        type="text"
                        name="subject"
                        className="form-control"
                        id="subject-input"
                        placeholder="Subject"
                        required
                        minLength="3"
                        maxLength="50"
                    />
                </div>
                <div className="col-12">
                    <textarea
                        className="form-control"
                        name="message"
                        id="message-input"
                        rows="3"
                        placeholder="Type your message here..."
                        required
                        minLength="5"
                        maxLength="1000"
                    ></textarea>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-light form_btn">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
