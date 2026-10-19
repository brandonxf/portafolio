import { NextResponse } from "next/server"
import { Resend } from "resend"

const CONTACT_EMAIL = "brandonace07@gmail.com"

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "El servidor no tiene configurada la API key de Resend." },
      { status: 500 }
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
    return NextResponse.json({ error: "No se pudo enviar el mensaje." }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
