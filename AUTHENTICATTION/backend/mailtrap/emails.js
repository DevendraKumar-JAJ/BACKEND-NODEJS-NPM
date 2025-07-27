import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemp.js";

import { sendMail } from "./user.mailtrap.js";

export const sendVerificationEmail = async (verificationToken) => {
  try {
    const response=await sendMail(
      VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      "Verify Through Email",
      "Account Verification"
    );
    if(response){
      console.log('Succcccccccccccccccccccccccccc')
    }
    else{
      throw({error:"Unsuccess"})
    }
  } catch (error) {
    console.error(`Error sending verification`, error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

// export const sendWelcomeEmail = async (email, name) => {
//   const recipient = [{ email }];

//   try {
//     const response = await client.send({
//       from: sender,
//       to: recipient,
//       template_uuid: "e65925d1-a9d1-4a40-ae7c-d92b37d593df",
//       template_variables: {
//         company_info_name: "Auth Company",
//         name: name,
//       },
//     });

//     console.log("Welcome email sent successfully", response);
//   } catch (error) {
//     console.error(`Error sending welcome email`, error);

//     throw new Error(`Error sending welcome email: ${error}`);
//   }
// };

// export const sendPasswordResetEmail = async (email, resetURL) => {
//   const recipient = [{ email }];

//   try {
//     const response = await client.send({
//       from: sender,
//       to: recipient,
//       subject: "Reset your password",
//       html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
//       category: "Password Reset",
//     });
//   } catch (error) {
//     console.error(`Error sending password reset email`, error);

//     throw new Error(`Error sending password reset email: ${error}`);
//   }
// };

// export const sendResetSuccessEmail = async (email) => {
//   const recipient = [{ email }];

//   try {
//     const response = await client.send({
//       from: sender,
//       to: recipient,
//       subject: "Password Reset Successful",
//       html: PASSWORD_RESET_SUCCESS_TEMPLATE,
//       category: "Password Reset",
//     });

//     console.log("Password reset email sent successfully", response);
//   } catch (error) {
//     console.error(`Error sending password reset success email`, error);

//     throw new Error(`Error sending password reset success email: ${error}`);
//   }
// };
