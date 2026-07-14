const BASE_URL = "https://crudcrud.com/api/551e073dedc54a9f8ea00bd8702941e5/artigos";

// 🔹 Buscar todos os artigos
export async function getArtigos() {
  const res = await fetch(BASE_URL, {
    cache: "no-store", // SSR (dados sempre atualizados)
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar artigos");
  }

  return res.json();
}

// 🔹 Buscar artigo por slug
export async function getArtigoBySlug(slug: string) {
  const artigos = await getArtigos();

  return artigos.find((artigo: any) => artigo.slug === slug);
}