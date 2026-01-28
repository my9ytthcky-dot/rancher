import type { Context, Config } from "@netlify/functions";
import sgMail from "@sendgrid/mail";

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertySize: string;
  message: string;
}

const serviceLabels: Record<string, string> = {
  "house-washing": "Residential House Washing",
  "commercial-cleaning": "Commercial Property Cleaning",
  "driveway-walkways": "Driveway & Walkway Cleaning",
  "deck-patio": "Deck & Patio Cleaning",
  "fence-cleaning": "Fence Cleaning & Restoration",
  "other": "Other",
};

const propertySizeLabels: Record<string, string> = {
  "small": "Small (Under 1,500 sq ft)",
  "medium": "Medium (1,500-3,000 sq ft)",
  "large": "Large (3,000-5,000 sq ft)",
  "xl": "Extra Large (Over 5,000 sq ft)",
  "commercial": "Commercial Property",
};

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const sendgridApiKey = Netlify.env.get("SENDGRID_API_KEY");

  if (!sendgridApiKey) {
    console.error("SENDGRID_API_KEY environment variable is not set");
    return new Response(
      JSON.stringify({ error: "Email service not configured" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  sgMail.setApiKey(sendgridApiKey);

  try {
    const formData: QuoteFormData = await req.json();

    const { name, email, phone, service, propertySize, message } = formData;

    if (!name || !phone || !service) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const serviceLabel = serviceLabels[service] || service;
    const propertySizeLabel = propertySizeLabels[propertySize] || propertySize || "Not specified";

    const emailContent = `
New Quote Request from Rancher Services Website

Customer Information:
---------------------
Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

Service Details:
----------------
Service Requested: ${serviceLabel}
Property Size: ${propertySizeLabel}

Project Details:
----------------
${message || "No additional details provided"}

---------------------
This quote request was submitted through the Rancher Services website.
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
    .section { margin-bottom: 20px; }
    .section-title { font-weight: bold; color: #1d4ed8; border-bottom: 2px solid #3b82f6; padding-bottom: 5px; margin-bottom: 10px; }
    .field { margin-bottom: 8px; }
    .label { font-weight: bold; color: #374151; }
    .value { color: #1f2937; }
    .footer { background: #e5e7eb; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">New Quote Request</h1>
      <p style="margin: 5px 0 0 0;">Rancher Services Website</p>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Customer Information</div>
        <div class="field"><span class="label">Name:</span> <span class="value">${name}</span></div>
        <div class="field"><span class="label">Phone:</span> <span class="value">${phone}</span></div>
        <div class="field"><span class="label">Email:</span> <span class="value">${email || "Not provided"}</span></div>
      </div>
      <div class="section">
        <div class="section-title">Service Details</div>
        <div class="field"><span class="label">Service Requested:</span> <span class="value">${serviceLabel}</span></div>
        <div class="field"><span class="label">Property Size:</span> <span class="value">${propertySizeLabel}</span></div>
      </div>
      <div class="section">
        <div class="section-title">Project Details</div>
        <p class="value">${message || "No additional details provided"}</p>
      </div>
    </div>
    <div class="footer">
      This quote request was submitted through the Rancher Services website.
    </div>
  </div>
</body>
</html>
    `.trim();

    const msg = {
      to: "Contact@rancherservices.com",
      from: "Contact@rancherservices.com",
      subject: `New Quote Request from ${name} - ${serviceLabel}`,
      text: emailContent,
      html: htmlContent,
    };

    await sgMail.send(msg);

    return new Response(
      JSON.stringify({ success: true, message: "Quote request sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send quote request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const config: Config = {
  path: "/api/send-quote",
};
