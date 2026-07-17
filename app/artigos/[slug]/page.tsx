import { notFound } from "next/navigation";
import { getArtigoBySlug, getArtigos } from "@/lbi/api";

type Params = { slug: string };

// Gera páginas estáticas com base nos slugs do JSON local
export async function generateStaticParams() {
  const artigos = await getArtigos();

  return (Array.isArray(artigos) ? artigos : []).map((artigo) => ({
    slug: artigo.slug,
  }));
}

// SEO dinâmico
export async function generateMetadata({ params }: { params: Params }) {
  const artigo = await getArtigoBySlug(params.slug);

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
      description: "Esse artigo não existe",
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.descricao,
  };
}


export default async function ArtigoPage({ params }: { params: Params }) {
  const artigo = await getArtigoBySlug(params.slug);

  if (!artigo) return notFound();

  return (
    <main style={{ padding: "20px" }}>
      <h1>{artigo.titulo}</h1>

      <p>
        <strong>{artigo.autor}</strong> - {artigo.data}
      </p>

      <p>{artigo.conteudo}</p>
    </main>
  );
}

