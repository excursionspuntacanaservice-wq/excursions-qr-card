# excursions-qr-card
Fuentes JSX en `src/`. `api/*.js` es la version compilada (JS plano) que corre Vercel.
Recompilar tras editar `src/`:
    npx esbuild src/ticket.jsx --jsx-factory=h --loader:.jsx=jsx --format=esm --inject:h.js --outfile=api/ticket.js
    npx esbuild src/card.jsx   --jsx-factory=h --loader:.jsx=jsx --format=esm --inject:h.js --outfile=api/card.js
