const handler = async (req, res) => {
    try {
        const { name, email, phone, address, subject, message } = req.body;
        if (req.method === "POST") {
            // Process a POST request
            res.status(200).json({ message: "Form submitted!" });
        } else {
            // Handle any other HTTP method
            res.status(405).send();
        }
    } catch (error) {
        res.status(500).send();
    }
};

export default handler;
