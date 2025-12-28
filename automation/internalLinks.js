export function autoLinks(content, movies){
  movies.forEach(m=>{
    const regex = new RegExp(m.title_en,"gi");
    content = content.replace(regex, `<a href="/movies/${m.slug}.html">${m.title_en}</a>`);
  });
  return content;
}
