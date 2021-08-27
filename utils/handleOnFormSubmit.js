import swal from "sweetalert";

const handleOnFormSubmit = async (e) => {
    try {
        e.preventDefault();

        const { name, email, phone, address, subject, message } = e.target;

        const formData = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
            subject: subject.value,
            message: message.value,
        };

        const config = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };

        const response = await fetch(
            "/api/contact",
            config
        );
        const data = await response.json();

        if (response.ok) {
            await swal("Success!", data.message, "success");
            //
            e.target.reset();
        } else {
            await swal(
                "Error!",
                "Form submission failed. Please try again.",
                "error"
            );
        }
    } catch (error) {
        await swal("Error!", "An error occurred. Please try again.", "error");
    }
};

export default handleOnFormSubmit;
