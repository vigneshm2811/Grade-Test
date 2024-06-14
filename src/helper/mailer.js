import { send } from "@emailjs/browser"; // Importing the send function from the emailjs-browser library

// Defining an asynchronous function to send emails
export const EmailSender = async (recipientEmail, testId) => {
    try {
        // Sending an email using emailjs send function
        const response = await send(
            import.meta.env.VITE_EMAIL_SERVICE_ID, // Service ID from environment variables
            import.meta.env.VITE_EMAIL_TEMPLATE_ID, // Template ID from environment variables
            {
                to_email: recipientEmail, // Recipient's email address
                subject: "Invitation to Take a Test with Grade Test", // Subject of the email
                to_name: "", // Name of the recipient (if available)
                testId: testId, // Test ID to be included in the email
                testLink: "https://grade-test.vercel.app/", // Link to the test
            },
            import.meta.env.VITE_EMAIL_API_AUTH_KEY // API authentication key from environment variables
        );

    } catch (error) {
        // Logging any errors that occur during the email sending process
        console.error("Error sending email:", error);
    }
};
