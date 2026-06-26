export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "Please fill all required fields." },
        { status: 400 },
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return Response.json(
        { success: false, message: "Web3Forms access key is missing." },
        { status: 500 },
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (compatible; NextJS-App/1.0)", // 👈 ADD THIS
      },
      body: JSON.stringify({
        access_key: accessKey.trim(),
        name,
        email,
        subject: subject || "New message from MasumDev website",
        message,
        from_name: "MasumDev Portfolio",
      }),
    });

    const text = await response.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch (error) {
      console.error("WEB3FORMS_INVALID_JSON:", text);
      return Response.json(
        { success: false, message: "Invalid response from Web3Forms." },
        { status: 500 },
      );
    }

    if (!response.ok || !data.success) {
      return Response.json(
        {
          success: false,
          message: data.message || "Message could not be sent.",
        },
        { status: response.status || 400 },
      );
    }

    return Response.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT_API_ERROR:", error);
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
