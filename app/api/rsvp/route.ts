export async function POST(req: Request) {
  const { name, address, email } = await req.json();

  if (!name || !address || !email) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }

  const webhookUrl = process.env.RSVP_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json({ error: "Webhook not configured." }, { status: 500 });
  }

  try {
    const body = new URLSearchParams({ name, address, email });
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
      redirect: "follow",
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("RSVP webhook error:", err);
    return Response.json({ error: "Failed to submit." }, { status: 500 });
  }
}
