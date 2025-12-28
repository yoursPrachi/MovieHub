export async function translate(text) {
  const res = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q="+encodeURIComponent(text));
  const data = await res.json();
  return data[0].map(t=>t[0]).join("");
}
