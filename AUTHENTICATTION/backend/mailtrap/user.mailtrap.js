import { MailtrapClient } from "mailtrap";

const TOKEN = process.env.MAIL_TOKEN;
const ENDPOINT = process.env.MAIL_ENDPOINT;

console.log("Mailtrap Token:", TOKEN); // Verify the token value

export const sendMail = async (
  message,
  sub,
  cate,
  UserEmail = "jackjohan7520@gmail.com"
) => {
  try {
    const client = new MailtrapClient({
      token: TOKEN,
    });

    const sender = {
      email: "mailtrap@demomailtrap.co",
      name: "App validate",
    };

    const recipients = [
      {
        email: UserEmail,
      },
    ];

    await client.send({
      from: sender,
      to: recipients,
      subject: sub,
      html: message,
      category: cate,
    });

    await client
      .send({
        from: sender,
        to: recipients,
        subject: "Verify Email",
        html: message,
        category: "Account Verification",
      })
      .then(console.log, console.error);

    return 1;
  } catch (error) {
    console.error(error);
    return 0;
  }
};
