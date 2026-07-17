import artigos from "@/data/artigos.json";

type Artigo = {
  slug: string;
  titulo: string;
  autor: string;
  data: string;
  descricao: string;
  conteudo: string;
};

// 🔹 Buscar todos os artigos (fonte única: JSON local)
export async function getArtigos(): Promise<Artigo[]> {
  return artigos as Artigo[];
}

// 🔹 Buscar artigo por slug (fonte única: JSON local)
export async function getArtigoBySlug(slug: string): Promise<Artigo | undefined> {
  return (artigos as Artigo[]).find((artigo) => artigo.slug === slug);
}

