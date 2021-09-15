import nodemailer from "nodemailer";

const sendEmail = async (formData) => {
    try {
        const { name, email, phone, address, subject, message } = formData;
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            secureConnection: false,
            port: process.env.PORT,
            tls: {
                ciphers: "SSLv3",
            },
            auth: {
                user: process.env.ADMIN_EMAIL,
                pass: process.env.ADMIN_EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.ADMIN_EMAIL,
            to: process.env.TO_EMAIL,
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
