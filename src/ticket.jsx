import { ImageResponse } from '@vercel/og';



// Ticket unico de Excursions Punta Cana (ES/EN/FR/DE/IT/PT).
// Mismos parametros que el ticket anterior: nombre, excursion, fecha, hora, hotel,
// adultos, ninos, menores, pa (precio adulto), ref, lang. Opcional: total.

const T = {
  es: { confirmed: 'RESERVA CONFIRMADA', guest: 'A NOMBRE DE', ref: 'REFERENCIA', tour: 'EXCURSIÓN', date: 'FECHA', time: 'HORA DE RECOGIDA', hotel: 'HOTEL / PUNTO DE RECOGIDA', guests: 'PERSONAS Y PRECIO', adults: 'Adultos', children: 'Niños (2-12)', under2: 'Menores de 2', free: 'GRATIS', boat: 'Barco privado completo', perBoat: 'precio por barco', upTo: 'hasta', people: 'personas', total: 'TOTAL PAGADO', bring: 'QUÉ LLEVAR', bringList: ['Traje de baño y ropa de cambio', 'Protector solar y gafas', 'Toalla', 'Efectivo para propinas o extras', 'Este ticket en tu teléfono'], help: '¿AYUDA O CAMBIOS?', scan: 'Escanea para escribirnos', important: 'IMPORTANTE', importantMsg: 'Espera en la entrada de tu hotel 10 minutos antes de la hora de recogida. El bus espera unos 10 minutos en cada hotel. Muestra este ticket al chofer.', cancel: 'CANCELACIÓN', cancelMsg: 'Gratis hasta 24 horas antes del tour, con reembolso completo. No hay reembolso por no presentarse.', thanks: '¡Gracias por elegir Excursions Punta Cana!', tbc: 'Por confirmar' },
  en: { confirmed: 'BOOKING CONFIRMED', guest: 'BOOKED BY', ref: 'BOOKING REF', tour: 'TOUR', date: 'DATE', time: 'PICKUP TIME', hotel: 'HOTEL / PICKUP POINT', guests: 'GUESTS & PRICE', adults: 'Adults', children: 'Children (2-12)', under2: 'Under 2', free: 'FREE', boat: 'Whole private boat', perBoat: 'price per boat', upTo: 'up to', people: 'people', total: 'TOTAL PAID', bring: 'WHAT TO BRING', bringList: ['Swimsuit & change of clothes', 'Sunscreen & sunglasses', 'Towel', 'Cash for tips or extras', 'This ticket on your phone'], help: 'HELP OR CHANGES?', scan: 'Scan to message us', important: 'IMPORTANT', importantMsg: 'Wait at your hotel entrance 10 minutes before pickup time. The bus waits about 10 minutes at each hotel. Show this ticket to the driver.', cancel: 'CANCELLATION', cancelMsg: 'Free up to 24 hours before the tour, full refund. No refunds for no-shows.', thanks: 'Thank you for choosing Excursions Punta Cana!', tbc: 'To be confirmed' },
  fr: { confirmed: 'RÉSERVATION CONFIRMÉE', guest: 'AU NOM DE', ref: 'RÉFÉRENCE', tour: 'EXCURSION', date: 'DATE', time: 'HEURE DE PRISE EN CHARGE', hotel: 'HÔTEL / POINT DE RENCONTRE', guests: 'PARTICIPANTS ET PRIX', adults: 'Adultes', children: 'Enfants (2-12)', under2: 'Moins de 2 ans', free: 'GRATUIT', boat: 'Bateau privé complet', perBoat: 'prix par bateau', upTo: "jusqu'à", people: 'personnes', total: 'TOTAL PAYÉ', bring: 'À APPORTER', bringList: ['Maillot et vêtements de rechange', 'Crème solaire et lunettes', 'Serviette', 'Espèces pour pourboires', 'Ce ticket sur votre téléphone'], help: 'AIDE OU CHANGEMENTS ?', scan: 'Scannez pour nous écrire', important: 'IMPORTANT', importantMsg: "Attendez à l'entrée de votre hôtel 10 minutes avant l'heure. Le bus attend environ 10 minutes. Montrez ce ticket au chauffeur.", cancel: 'ANNULATION', cancelMsg: "Gratuite jusqu'à 24 h avant, remboursement complet. Pas de remboursement en cas d'absence.", thanks: "Merci d'avoir choisi Excursions Punta Cana !", tbc: 'À confirmer' },
  de: { confirmed: 'BUCHUNG BESTÄTIGT', guest: 'GEBUCHT VON', ref: 'BUCHUNGSNUMMER', tour: 'AUSFLUG', date: 'DATUM', time: 'ABHOLZEIT', hotel: 'HOTEL / ABHOLPUNKT', guests: 'PERSONEN & PREIS', adults: 'Erwachsene', children: 'Kinder (2-12)', under2: 'Unter 2', free: 'GRATIS', boat: 'Ganzes Privatboot', perBoat: 'Preis pro Boot', upTo: 'bis zu', people: 'Personen', total: 'BEZAHLT', bring: 'MITBRINGEN', bringList: ['Badekleidung & Wechselkleidung', 'Sonnencreme & Sonnenbrille', 'Handtuch', 'Bargeld für Trinkgeld', 'Dieses Ticket auf dem Handy'], help: 'HILFE ODER ÄNDERUNGEN?', scan: 'Scannen und schreiben', important: 'WICHTIG', importantMsg: 'Warten Sie 10 Minuten vor der Abholzeit am Hoteleingang. Der Bus wartet etwa 10 Minuten. Zeigen Sie dieses Ticket dem Fahrer.', cancel: 'STORNIERUNG', cancelMsg: 'Kostenlos bis 24 Stunden vorher, volle Erstattung. Keine Erstattung bei Nichterscheinen.', thanks: 'Danke, dass Sie Excursions Punta Cana gewählt haben!', tbc: 'Wird bestätigt' },
  it: { confirmed: 'PRENOTAZIONE CONFERMATA', guest: 'A NOME DI', ref: 'RIFERIMENTO', tour: 'ESCURSIONE', date: 'DATA', time: 'ORARIO DI RITIRO', hotel: 'HOTEL / PUNTO DI RITIRO', guests: 'PERSONE E PREZZO', adults: 'Adulti', children: 'Bambini (2-12)', under2: 'Sotto i 2', free: 'GRATIS', boat: 'Barca privata intera', perBoat: 'prezzo per barca', upTo: 'fino a', people: 'persone', total: 'TOTALE PAGATO', bring: 'COSA PORTARE', bringList: ['Costume e cambio', 'Crema solare e occhiali', 'Asciugamano', 'Contanti per mance', 'Questo biglietto sul telefono'], help: 'AIUTO O MODIFICHE?', scan: 'Scansiona per scriverci', important: 'IMPORTANTE', importantMsg: "Aspetta all'ingresso dell'hotel 10 minuti prima. Il bus attende circa 10 minuti. Mostra questo biglietto all'autista.", cancel: 'CANCELLAZIONE', cancelMsg: 'Gratuita fino a 24 ore prima, rimborso completo. Nessun rimborso per mancata presentazione.', thanks: 'Grazie per aver scelto Excursions Punta Cana!', tbc: 'Da confermare' },
  pt: { confirmed: 'RESERVA CONFIRMADA', guest: 'EM NOME DE', ref: 'REFERÊNCIA', tour: 'PASSEIO', date: 'DATA', time: 'HORÁRIO DE BUSCA', hotel: 'HOTEL / PONTO DE ENCONTRO', guests: 'PESSOAS E PREÇO', adults: 'Adultos', children: 'Crianças (2-12)', under2: 'Menores de 2', free: 'GRÁTIS', boat: 'Barco privado inteiro', perBoat: 'preço por barco', upTo: 'até', people: 'pessoas', total: 'TOTAL PAGO', bring: 'O QUE LEVAR', bringList: ['Roupa de banho e troca', 'Protetor solar e óculos', 'Toalha', 'Dinheiro para gorjetas', 'Este bilhete no celular'], help: 'AJUDA OU ALTERAÇÕES?', scan: 'Escaneie para nos escrever', important: 'IMPORTANTE', importantMsg: 'Espere na entrada do hotel 10 minutos antes. O ônibus espera cerca de 10 minutos. Mostre este bilhete ao motorista.', cancel: 'CANCELAMENTO', cancelMsg: 'Grátis até 24 horas antes, reembolso total. Sem reembolso por não comparecimento.', thanks: 'Obrigado por escolher a Excursions Punta Cana!', tbc: 'A confirmar' },
};

const money = (n) => '$' + (Math.round(n * 100) / 100).toFixed(2) + ' USD';
const num = (v) => { const n = parseFloat(String(v || '0').replace(',', '.')); return isNaN(n) ? 0 : n; };
const clip = (s, n) => (s || '').toString().slice(0, n);

export async function GET(req) {
  const p = new URL(req.url).searchParams;
  const langRaw = (p.get('lang') || 'es').toLowerCase().slice(0, 2);
  const t = T[langRaw] || T.es;
  const nombre = clip(p.get('nombre') || '-', 40);
  const tour = clip(p.get('excursion') || '-', 40);
  const fecha = clip(p.get('fecha') || '-', 20);
  let hora = clip(p.get('hora') || '', 30);
  if (!hora || !/\d/.test(hora)) hora = t.tbc;
  const hotel = clip(p.get('hotel') || '-', 70);
  const ref = clip(p.get('ref') || '-', 30);
  const ad = num(p.get('adultos'));
  const ni = num(p.get('ninos'));
  const me = num(p.get('menores'));
  const pa = num(p.get('pa'));
  const isBoat = /barco|privad|private|boat/i.test(tour);
  const pax = ad + ni + me;

  let lines = [];
  let total = num(p.get('total'));
  if (isBoat) {
    const boatPrice = total || (pax <= 6 ? 550 : pax <= 10 ? 650 : 750);
    const cap = pax <= 6 ? 6 : pax <= 10 ? 10 : 15;
    total = boatPrice;
    lines.push([`${t.boat}`, `${money(boatPrice)}`, '']);
    lines.push([`${pax} ${t.people} · ${t.upTo} ${cap} · ${t.perBoat}`, '', '']);
  } else {
    if (!total) total = ad * pa + ni * (pa / 2);
    if (ad) lines.push([`${ad} × ${t.adults}`, money(ad * pa), `(${money(pa).replace(' USD', '')})`]);
    if (ni) lines.push([`${ni} × ${t.children}`, money(ni * pa / 2), `(${money(pa / 2).replace(' USD', '')})`]);
    if (me) lines.push([`${me} × ${t.under2}`, t.free, '']);
  }

  const wa = `https://wa.me/18299621705?text=${encodeURIComponent(ref)}`;
  let qrSrc = null;
  try {
    const r = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=220x220&qzone=1&data=${encodeURIComponent(wa)}`);
    const b = new Uint8Array(await r.arrayBuffer());
    let s = ''; for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
    qrSrc = `data:image/png;base64,${btoa(s)}`;
  } catch (e) { qrSrc = null; }

  const C = { bg: '#0B1F2A', card: '#12303F', line: '#1E4A5C', teal: '#2EE6C5', sky: '#38B6FF', white: '#FFFFFF', mute: '#8FB3C2', warn: '#F6C453' };
  const label = { fontSize: 15, color: C.mute, letterSpacing: 2, fontWeight: 700 };
  const value = { fontSize: 30, color: C.white, fontWeight: 800, marginTop: 6 };
  const box = { display: 'flex', flexDirection: 'column', background: C.card, border: `2px solid ${C.line}`, borderRadius: 18, padding: '18px 22px' };

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: C.bg, fontFamily: 'Arial, sans-serif' }}>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '34px 40px 40px', background: `linear-gradient(135deg, ${C.sky}, #1C7ED6)` }}>
          <div style={{ fontSize: 16, color: '#E6F6FF', letterSpacing: 6, fontWeight: 700 }}>PUNTA CANA · DOMINICAN REPUBLIC</div>
          <div style={{ fontSize: 50, color: C.white, fontWeight: 900, marginTop: 8, lineHeight: 1 }}>excursions</div>
          <div style={{ fontSize: 50, color: C.white, fontWeight: 900, lineHeight: 1 }}>punta cana</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '30px 40px 0' }}>
          <div style={{ display: 'flex', fontSize: 46, fontWeight: 900, color: C.white }}>{t.confirmed.split(' ')[0]}<span style={{ color: C.teal, marginLeft: 14 }}>{t.confirmed.split(' ').slice(1).join(' ')}</span></div>
          <div style={{ display: 'flex', height: 3, background: C.teal, marginTop: 14, width: 160 }} />
          <div style={{ display: 'flex', marginTop: 18, fontSize: 16, color: C.mute, letterSpacing: 2, fontWeight: 700 }}>{t.guest}<span style={{ color: C.white, fontSize: 24, letterSpacing: 0, marginLeft: 12 }}>{nombre}</span></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '22px 40px 0', gap: 14 }}>
          <div style={{ ...box, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={label}>{t.ref}</span>
            <span style={{ fontSize: 30, color: C.teal, fontWeight: 900, letterSpacing: 3 }}>{ref}</span>
          </div>
          <div style={box}><span style={label}>{t.tour}</span><span style={value}>{tour}</span></div>
          <div style={{ display: 'flex', gap: 14 }}>
            <div style={{ ...box, flex: 1 }}><span style={label}>{t.date}</span><span style={value}>{fecha}</span></div>
            <div style={{ ...box, flex: 1, border: `2px solid ${C.teal}` }}><span style={label}>{t.time}</span><span style={{ ...value, color: C.teal }}>{hora}</span></div>
          </div>
          <div style={box}><span style={label}>{t.hotel}</span><span style={{ ...value, fontSize: 26 }}>{hotel}</span></div>
          <div style={{ ...box, background: '#0F3B3A', border: `2px solid #1F7A6E` }}>
            <span style={label}>{t.guests}</span>
            {lines.map((l, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 22, color: C.white }}>
                <span style={{ display: 'flex' }}>{l[0]}{l[2] ? <span style={{ color: C.mute, marginLeft: 10 }}>· {l[2]}</span> : null}</span>
                <span style={{ fontWeight: 800 }}>{l[1]}</span>
              </div>
            ))}
            <div style={{ display: 'flex', height: 2, background: '#1F7A6E', marginTop: 14 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
              <span style={{ ...label, color: C.white }}>{t.total}</span>
              <span style={{ fontSize: 40, fontWeight: 900, color: C.teal }}>{money(total)}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            <div style={{ ...box, flex: 1.2 }}>
              <span style={label}>{t.bring}</span>
              {t.bringList.map((b, i) => <span key={i} style={{ fontSize: 18, color: C.white, marginTop: 8 }}>• {b}</span>)}
            </div>
            <div style={{ ...box, flex: 1, alignItems: 'center' }}>
              <span style={label}>{t.help}</span>
              {qrSrc ? <img src={qrSrc} width={170} height={170} style={{ marginTop: 12, borderRadius: 8, background: '#fff', padding: 6 }} /> : null}
              <span style={{ fontSize: 15, color: C.mute, marginTop: 8 }}>{t.scan}</span>
              <span style={{ fontSize: 18, color: C.white, fontWeight: 800, marginTop: 4 }}>+1 (829) 962-1705</span>
            </div>
          </div>
          <div style={{ ...box, background: '#2A2410', border: `2px solid ${C.warn}` }}>
            <span style={{ ...label, color: C.warn }}>{t.important}</span>
            <span style={{ fontSize: 19, color: C.white, marginTop: 8, lineHeight: 1.35 }}>{t.importantMsg}</span>
          </div>
          <div style={box}>
            <span style={label}>{t.cancel}</span>
            <span style={{ fontSize: 18, color: C.white, marginTop: 8, lineHeight: 1.35 }}>{t.cancelMsg}</span>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1 }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 40px 34px' }}>
          <span style={{ fontSize: 22, color: C.white, fontWeight: 800 }}>{t.thanks}</span>
          <span style={{ fontSize: 16, color: C.mute, marginTop: 6 }}>excursionspuntacana.net · info@excursionspuntacana.net</span>
        </div>
      </div>
    ),
    { width: 810, height: 1720 }
  );
}
