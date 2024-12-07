import { render } from "@react-email/components";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

import { Resend } from "resend";

export const sendEmail = async () => {
  const resend = new Resend("re_XDcsXemi_GL4vvfBzZ2bxJDBV2cYiyy8C");

  await resend.emails.send({
    from: "Anudeep <contactform@jayambuilders.net>",
    to: ["webbuilders58@gmail.com"],
    subject: "hello world",
    html: "<p>it works!</p>",
  });
};
