export const h = (type, props, ...children) => {
  const p = { ...(props || {}) };
  if (type === 'div') p.style = { display: 'flex', ...(p.style || {}) };
  if (children.length === 1) p.children = children[0]; else if (children.length > 1) p.children = children;
  return { type, props: p };
};
