import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const rawCode = searchParams.get('code') || '0000-XX';
    const code = rawCode.toUpperCase().replace(/[^A-Z0-9-]/g, '').substring(0, 12);

    const waLink = `https://wa.me/18299621705?text=${encodeURIComponent(code)}`;
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(waLink)}&bgcolor=080f0a&color=c8a84b&qzone=2`;

    const qrRes = await fetch(qrApiUrl);
    const qrBuf = await qrRes.arrayBuffer();
    const qrArr = new Uint8Array(qrBuf);
    let binary = '';
    for (let i = 0; i < qrArr.length; i++) binary += String.fromCharCode(qrArr[i]);
    const qrSrc = `data:image/png;base64,${btoa(binary)}`;

    return new ImageResponse(
      (
        <div style={{ width:'100%', height:'100%', background:'#080f0a', display:'flex', flexDirection:'column', alignItems:'center', fontFamily:'"Arial Black", Arial, sans-serif' }}>
          <div style={{ width:'100%', height:4, background:'linear-gradient(90deg,#080f0a,#c8a84b,#f0d078,#c8a84b,#080f0a)', flexShrink:0 }} />
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'18px 24px 10px' }}>
            <div style={{ width:46, height:46, borderRadius:'50%', border:'1.5px solid #c8a84b', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:9 }}>
              <span style={{ fontSize:12, fontWeight:900, color:'#c8a84b' }}>EP</span>
            </div>
            <div style={{ fontSize:9, fontWeight:700, color:'#7a9e83', letterSpacing:5, marginBottom:3 }}>EXCURSIONS</div>
            <div style={{ fontSize:25, fontWeight:900, color:'#ffffff', letterSpacing:2 }}>PUNTA CANA</div>
            <div style={{ width:50, height:1.5, background:'#c8a84b', marginTop:8 }} />
          </div>
          <div style={{ background:'#0d1a10', border:'1.5px solid #c8a84b', borderRadius:12, padding:'12px 32px', display:'flex', flexDirection:'column', alignItems:'center', marginBottom:14, width:330 }}>
            <div style={{ fontSize:8, color:'#5a7d63', letterSpacing:3, fontWeight:700, marginBottom:7 }}>CODIGO EXCLUSIVO · EXCLUSIVE CODE</div>
            <div style={{ fontSize:31, color:'#c8a84b', letterSpacing:6, fontWeight:900 }}>{code}</div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
            <div style={{ fontSize:8, color:'#5a7d63', letterSpacing:3, fontWeight:700, marginBottom:9 }}>ESCANEA · SCAN · SCANNER</div>
            <div style={{ border:'1.5px solid #2a3d2f', borderRadius:14, padding:11, background:'#0a140d' }}>
              <img src={qrSrc} width={186} height={186} style={{ borderRadius:6, display:'block' }} />
            </div>
          </div>
          <div style={{ background:'#0f2314', border:'1px solid #2d5c38', borderRadius:12, padding:'10px 20px', display:'flex', flexDirection:'column', alignItems:'center', margin:'12px 0 0', width:332 }}>
            <div style={{ fontSize:11, color:'#c8a84b', fontWeight:900, letterSpacing:2 }}>SPECIAL PRICE · PRECIO ESPECIAL</div>
            <div style={{ fontSize:8, color:'#5a7d63', marginTop:2, letterSpacing:1 }}>For referred guests only · Solo para referidos</div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'12px 0 6px' }}>
            <div style={{ fontSize:17, color:'#ffffff', fontWeight:900, letterSpacing:1 }}>BOOK NOW · RESERVA AHORA</div>
            <div style={{ fontSize:9, color:'#5a7d63', marginTop:3 }}>Sofia responds instantly · Sofia responde de inmediato</div>
          </div>
          <div style={{ flex:1 }} />
          <div style={{ width:'100%', height:2, background:'linear-gradient(90deg,#080f0a,#c8a84b,#f0d078,#c8a84b,#080f0a)', flexShrink:0 }} />
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'7px 22px' }}>
            <span style={{ fontSize:9, color:'#3d5c44' }}>@excursionspuntacanaa</span>
            <span style={{ fontSize:8, color:'#2a3d2f' }}>excursionspuntacana.com</span>
          </div>
        </div>
      ),
      { width: 400, height: 620 }
    );
  } catch (err) {
    return new Response('Error: ' + err.message, { status: 500 });
  }
}
