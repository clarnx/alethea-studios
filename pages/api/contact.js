import * as yup from "yup";
import sendEmail from "../../utils/sendEmail";

const handler = async (req, res) => {
    try {
        if (req.method === "POST") {
            // Validate data
            const formDataSchema = yup.object().shape({
                name: yup.string().min(3).max(50).required(),
                email: yup.string().min(3).max(100).email().required(),
                phone: yup.string().max(15),
                address: yup.string(),
                subject: yup.string().min(3).max(50),
                message: yup.string().min(5).max(1000),
            });

            const formDataIsValid = await formDataSchema.isValid(req.body);

            if (formDataIsValid) {
                // Process a POST request
                await sendEmail(req.body);
                res.status(200).json({
                    message: "Your message has been received.",
                });
            } else {
                res.status(400).send();
            }
        } else {
            // Handle any other HTTP method
            res.status(405).send();
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send();
    }
};

export default handler;
