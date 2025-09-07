
## **Description**
This API endpoint allows you to send emails. You can specify the recipient's email address, subject, plain text content, and HTML content for the email.

---

## **Request Headers**

| Header          | Value            |
|-----------------|-----------------|
| Content-Type    | application/json |

---

## **Request Body**

The request should be in JSON format with the following fields:

| Field    | Type   | Description                         |
|----------|------ |------------------------------------|
| `to`     | string | Recipient's email address          |
| `subject` | string | Email subject line                 |
| `text`   | string | Plain text version of the email   |
| `html`   | string | HTML version of the email content  |

---

## **Example Request**

```bash
curl -X POST http://localhost:5000/api/mail/send \
-H "Content-Type: application/json" \
-d '{
  "to": "shyamduba58@gmail.com",
  "subject": "Test Email",
  "text": "This is a test email.",
  "html": "<h1>This is a test email</h1>"
}'
