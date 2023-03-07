import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const {email, nombre, token} = datos;

    // Enviar el email
    const info = await transporter.sendMail({
        from: "APV - Administrador de Pacientes de Veterinaria",
        to: email,
        subject: "Confirma tu cuenta en APV",
        text: "Confirma tu cuenta en APV",
        html: `<p>Hola: ${nombre}, confirma tu cuenta en APV.</p>
            <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a></p>

            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        `
    });
    console.log("Mensaje enviado: %s", info.messageId);
}

export default emailRegistro;