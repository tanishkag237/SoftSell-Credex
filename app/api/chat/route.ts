import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ reply: "Please provide a message." });
  }

  const faqs: Record<string, string> = {
  "sell": "To sell your license, go to your account dashboard and click on the 'Sell License' tab. Fill in the license details, pricing, and submit your listing. Our team will review and verify before making it public.",
  "sell license": "To sell your license, go to your account dashboard and click on the 'Sell License' tab. Fill in the license details, pricing, and submit your listing. Our team will review and verify before making it public.",
  "sell my license": "To sell your license, go to your account dashboard and click on the 'Sell License' tab. Fill in the license details, pricing, and submit your listing. Our team will review and verify before making it public.",
  "pricing": "We offer three plans: Free (basic features), Paid (advanced tools), and Enterprise (custom solutions for large businesses). You can compare features on our Pricing page or reach out to us for personalized quotes.",
  "support": "Our support team is available 24/7. You can contact us at support@softsell.com or use the chat widget anytime. We usually respond within 30 minutes during business hours.",
  "refund": "If you're not satisfied, we offer a full refund within 7 days of purchase. Refunds are processed back to your original payment method and may take 5–7 business days.",
  "demo": "We’d love to show you what SoftSell can do. Request a free demo by filling out the contact form, and our sales team will schedule a walkthrough tailored to your needs.",
  "features": "SoftSell allows you to list, manage, and resell your software licenses securely. It includes license tracking, buyer-seller messaging, payment protection, and transfer automation—all in one dashboard.",
};

  const lowerMsg = message.toLowerCase().trim();


  const matchedKey = Object.keys(faqs).find((key) => lowerMsg.includes(key));

  if (matchedKey) {
    return NextResponse.json({ reply: faqs[matchedKey] });
  }

  try {
    const aiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    const reply = aiResponse.choices[0]?.message?.content?.trim() || "Sorry, I couldn't understand that. ";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("OpenAI error:", error);
    return NextResponse.json({ reply: "An error occurred. Please try again later. Or contact 9876543210" });
  }
}
