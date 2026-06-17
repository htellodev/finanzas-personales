exports.handler = async function(event) {
  const SECRET    = "rulitos2026";
  const BOT_TOKEN = "8890220273:AAEqy97iNbZlLCXPtbki_xXkyJO5cwpjQEk";
  const CHAT_ID   = 1934306860;

  if (event.queryStringParameters?.secret !== SECRET) {
    return { statusCode: 401, body: "Unauthorized" };
  }

  const text = [
    "💰 *Recordatorio de pensión*",
    "",
    "¿Recibiste tu pensión por invalidez hoy?",
    "Monto esperado: *$324.406*",
    "",
    "Abre la app para confirmar o editar el monto 👇"
  ].join("\n");

  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" })
  });

  const data = await res.json();
  return { statusCode: 200, body: JSON.stringify(data) };
};
