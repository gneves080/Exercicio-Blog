import Link from "next/link";
import artigos from "@/data/artigos.json";

export const dynamic = "force-static"; // SSG

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Blog</h1>

      {artigos.map((artigo) => (
        <div key={artigo.slug} style={{ marginBottom: "20px" }}>
          <h2>
            <Link href={`/artigos/${artigo.slug}`}>
              {artigo.titulo}
            </Link>
          </h2>

          <p>{artigo.descricao}</p>
          <small>
            {artigo.autor} - {artigo.data}
          </small>
        </div>
      ))}
    </main>
  );
}