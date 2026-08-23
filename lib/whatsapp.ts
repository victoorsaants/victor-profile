import { site } from "@/data/site";

const MESSAGE = "Olá, João Victor! Vi seu portfólio e gostaria de conversar.";

/**
 * Monta o link de conversa do WhatsApp a partir do número cadastrado em data/site.ts.
 * Retorna null quando o número não está preenchido, para o botão não ser renderizado.
 */
export function whatsappLink() {
  const digits = site.whatsapp.replace(/\D/g, "");

  if (!digits) {
    return null;
  }

  return `https://wa.me/${digits}?text=${encodeURIComponent(MESSAGE)}`;
}
