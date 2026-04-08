import emailjs from '@emailjs/browser';

export async function enviarEmailDesigner(resultadoId) {
  const linkResultado = `${window.location.origin}/resultado/${resultadoId}`;

  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      designer_email: import.meta.env.VITE_DESIGNER_EMAIL,
      link_resultado: linkResultado,
      resultado_id: resultadoId,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}
