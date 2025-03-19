export default {
  async fetch(request, env) {
    if (request.method === "POST") {
      const { phone } = await request.json();

      if (!phone || phone.length < 8) {
        return new Response("Número inválido", { status: 400 });
      }

      await env.NUMEROS_TEL.put(phone, "guardado");

      return new Response("Número guardado correctamente", { status: 200 });
    }

    return new Response("Método no permitido", { status: 405 });
  },
};