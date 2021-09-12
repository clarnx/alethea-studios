import nodemailer from "nodemailer";

const sendEmail = async (formData) => {
    try {
        const { name, email, phone, address, subject, message } = formData;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: process.env.EMAIL_USERNAME,
            subject: "New Email - Alethea Studios Contact Form",
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone ? phone : "Not Provided"}
        Address: ${address ? address : "Not Provided"}
        Subject: ${subject}
        Message: ${message}
        `,
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw error;
    }
};

export default sendEmail;
