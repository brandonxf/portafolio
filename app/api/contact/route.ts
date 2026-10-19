import { NextResponse } from "next/server"
import { Resend } from "resend"

const CONTACT_EMAIL = "brandonace07@gmail.com"

// Orígenes que pueden llamar a esta API desde el navegador
// (el portafolio en GitHub Pages y el entorno local).
const ALLOWED_ORIGINS = ["https://brandonxf.github.io", "http://localhost:3000"]

function corsHeaders(request: Request) {
  const origin = request.headers.get("origin")
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  }
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin
  }
  return headers
}

export async function OPTIONS(request: Request) {
  return new NextResponse(null, { status: 204, headers: corsHeaders(request) })
}

export async function POST(request: Request) {
  const headers = corsHeaders(request)
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400, headers })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "El servidor no tiene configurada la API key de Resend." },
      { status: 500, headers }
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from: "Portafolio <onboarding@resend.dev>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `Nuevo mensaje de ${name} desde el portafolio`,
    text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
  })

  if (error) {
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 502, headers })
  }

  return NextResponse.json({ success: true }, { headers })
}
