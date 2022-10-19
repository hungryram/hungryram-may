const postmark = require("postmark");

export default async function (req, res) {
  const client = new postmark.ServerClient(process.env.GATSBY_POSTMARK_API_TOKEN);
  const submit = () => {
    const postmarkApiRes = client.sendEmailWithTemplate({
      "From": "ram@hungryram.com",
      "To": "ram@hungryram.com",
      "ReplyTo": req.body.email,
      "TemplateAlias": "hungryram-contact-form",
      "TemplateModel": {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "phone": req.body.phone,
        "message": req.body.message,
      }
    })
    return postmarkApiRes
  }
  try {
    const submitRes = await submit()
    res.status(200).json(submitRes)
  }
  catch(err) {
    res.status(500).json(err)
  }
}