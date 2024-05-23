import { send } from "@emailjs/browser";

export const EmailSender = async (recipientEmail, testId) => {
    try {
        const response = await send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                to_email: recipientEmail,
                subject: "Invitation to Take a Test with Grade Test",
                to_name: "",
                testId: testId,
                testLink: "https://grade-test.vercel.app/",
            },
            import.meta.env.VITE_EMAIL_API_AUTH_KEY
        );

    } catch (error) {

        console.error("Error sending email:", error);

    }
};