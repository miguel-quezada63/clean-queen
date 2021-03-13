const nodemailer = require("nodemailer");

exports.postForm = async (req, _) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "nyasia79@ethereal.email",
        pass: "dS9hn4vNuVWjRnA9Uh",
      },
    });
    !req.body.date && (req.body.date = "N.A");
    await transporter.sendMail({
      from: '"Clean Queen" cleanQueen@gmail.com',
      to: "rawredonion@gmail.com",
      subject: "Cleaning Service Request",
      html: `
    <p>Name: ${req.body.name}</p>
    <br>
    <p>Phone: ${req.body.phone}</p>
    <br>
    <p>Email: ${req.body.email}</p>
    <br>  
    <p>Service Date Requested: ${req.body.date}</p>
    <br>
    <p>Type of Job: ${req.body.cleanType}</p>
    <br>
    <p>Extra Details: ${req.body.description}</p>
    `,
    });
  } catch (err) {
    return err;
  }
};
