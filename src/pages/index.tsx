import LoadingSpinner from "@/components/LoadingSpinner"
import Background from "@/components/starwars/Background"
import Filmes from "@/components/starwars/Filmes"
import Personagens from "@/components/starwars/Personagens"
import useStarWars from "@/data/hooks/useStarWars"
import Head from "next/head"

const Home = () => {
  const { processando, personagens, voltar, filmes, selecionarPersonagem } =
    useStarWars()

  return (
    <>
      <Head>
        <title>Data Galaxy</title>
        <link rel="icon" href="/favicon_io/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon_io/favicon-48x48.png"
        />
        <link rel="manifest" href="/favicon_io/manifest.json" />
      </Head>
      <div>
        <div className="flex flex-col gap-5 justify-center items-center h-screen relative">
          <Background />

          {processando ? (
            <LoadingSpinner />
          ) : filmes.length > 0 ? (
            <Filmes filmes={filmes} voltar={voltar} />
          ) : personagens.length > 0 ? (
            <Personagens
              personagens={personagens}
              selecionar={selecionarPersonagem}
            />
          ) : (
            <div>Dados não encontrados</div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
