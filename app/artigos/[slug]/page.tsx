import artigos from "@/data/artigos.json";
import { notFound } from "next/navigation";

// 🔹 SSG - gera páginas estáticas
export async function generateStaticParams() {
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

// 🔹 SEO dinâmico
export async function generateMetadata({ params }: any) {
  const artigo = artigos.find((a) => a.slug === params.slug);

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

export default async function ArtigoPage({ params }: any) {
  const artigo = artigos.find((a) => a.slug === params.slug);

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