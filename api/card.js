var h = (type, props, ...children) => {
  const p = { ...props || {} };
  if (type === "div") p.style = { display: "flex", ...p.style || {} };
  if (children.length === 1) p.children = children[0];
  else if (children.length > 1) p.children = children;
  return { type, props: p };
};
import { ImageResponse } from "@vercel/og";
async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const rawCode = searchParams.get("code") || "0000-XX";
    const code = rawCode.toUpperCase().replace(/[^A-Z0-9-]/g, "").substring(0, 12);
    const waLink = `https://wa.me/18299621705?text=${encodeURIComponent(code)}`;
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(waLink)}&bgcolor=080f0a&color=c8a84b&qzone=2`;
    const qrRes = await fetch(qrApiUrl);
    const qrBuf = await qrRes.arrayBuffer();
    const qrArr = new Uint8Array(qrBuf);
    let binary = "";
    for (let i = 0; i < qrArr.length; i++) binary += String.fromCharCode(qrArr[i]);
    const qrSrc = `data:image/png;base64,${btoa(binary)}`;
    return new ImageResponse(
      /* @__PURE__ */ h("div", { style: { width: "100%", height: "100%", background: "#080f0a", display: "flex", flexDirection: "column", alignItems: "center", fontFamily: '"Arial Black", Arial, sans-serif' } }, /* @__PURE__ */ h("div", { style: { width: "100%", height: 4, background: "linear-gradient(90deg,#080f0a,#c8a84b,#f0d078,#c8a84b,#080f0a)", flexShrink: 0 } }), /* @__PURE__ */ h("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", padding: "18px 24px 10px" } }, /* @__PURE__ */ h("div", { style: { width: 46, height: 46, borderRadius: "50%", border: "1.5px solid #c8a84b", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 9 } }, /* @__PURE__ */ h("span", { style: { fontSize: 12, fontWeight: 900, color: "#c8a84b" } }, "EP")), /* @__PURE__ */ h("div", { style: { fontSize: 9, fontWeight: 700, color: "#7a9e83", letterSpacing: 5, marginBottom: 3 } }, "EXCURSIONS"), /* @__PURE__ */ h("div", { style: { fontSize: 25, fontWeight: 900, color: "#ffffff", letterSpacing: 2 } }, "PUNTA CANA"), /* @__PURE__ */ h("div", { style: { width: 50, height: 1.5, background: "#c8a84b", marginTop: 8 } })), /* @__PURE__ */ h("div", { style: { background: "#0d1a10", border: "1.5px solid #c8a84b", borderRadius: 12, padding: "12px 32px", display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 14, width: 330 } }, /* @__PURE__ */ h("div", { style: { fontSize: 8, color: "#5a7d63", letterSpacing: 3, fontWeight: 700, marginBottom: 7 } }, "CODIGO EXCLUSIVO \xB7 EXCLUSIVE CODE"), /* @__PURE__ */ h("div", { style: { fontSize: 31, color: "#c8a84b", letterSpacing: 6, fontWeight: 900 } }, code)), /* @__PURE__ */ h("div", { style: { display: "flex", flexDirection: "column", alignItems: "center" } }, /* @__PURE__ */ h("div", { style: { fontSize: 8, color: "#5a7d63", letterSpacing: 3, fontWeight: 700, marginBottom: 9 } }, "ESCANEA \xB7 SCAN \xB7 SCANNER"), /* @__PURE__ */ h("div", { style: { border: "1.5px solid #2a3d2f", borderRadius: 14, padding: 11, background: "#0a140d" } }, /* @__PURE__ */ h("img", { src: qrSrc, width: 186, height: 186, style: { borderRadius: 6, display: "block" } }))), /* @__PURE__ */ h("div", { style: { background: "#0f2314", border: "1px solid #2d5c38", borderRadius: 12, padding: "10px 20px", display: "flex", flexDirection: "column", alignItems: "center", margin: "12px 0 0", width: 332 } }, /* @__PURE__ */ h("div", { style: { fontSize: 11, color: "#c8a84b", fontWeight: 900, letterSpacing: 2 } }, "SPECIAL PRICE \xB7 PRECIO ESPECIAL"), /* @__PURE__ */ h("div", { style: { fontSize: 8, color: "#5a7d63", marginTop: 2, letterSpacing: 1 } }, "For referred guests only \xB7 Solo para referidos")), /* @__PURE__ */ h("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", padding: "12px 0 6px" } }, /* @__PURE__ */ h("div", { style: { fontSize: 17, color: "#ffffff", fontWeight: 900, letterSpacing: 1 } }, "BOOK NOW \xB7 RESERVA AHORA"), /* @__PURE__ */ h("div", { style: { fontSize: 9, color: "#5a7d63", marginTop: 3 } }, "Sofia responds instantly \xB7 Sofia responde de inmediato")), /* @__PURE__ */ h("div", { style: { flex: 1 } }), /* @__PURE__ */ h("div", { style: { width: "100%", height: 2, background: "linear-gradient(90deg,#080f0a,#c8a84b,#f0d078,#c8a84b,#080f0a)", flexShrink: 0 } }), /* @__PURE__ */ h("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", padding: "7px 22px" } }, /* @__PURE__ */ h("span", { style: { fontSize: 9, color: "#3d5c44" } }, "@excursionspuntacanaa"), /* @__PURE__ */ h("span", { style: { fontSize: 8, color: "#2a3d2f" } }, "excursionspuntacana.com"))),
      { width: 400, height: 620 }
    );
  } catch (err) {
    return new Response("Error: " + err.message, { status: 500 });
  }
}
export {
  GET
};
