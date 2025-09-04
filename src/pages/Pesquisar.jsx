import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilmeCard from "../components/FilmeCard";


const pesquisarURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY;


import './FilmesGrid.css'

const Pesquisar = () => {

    const [pesquisarParams] = useSearchParams() 

    const [filmes, setFilmes] = useState([])
    const query = pesquisarParams.get("q")

    //funcao que retorna filmes
    const getPesquisaFilmes = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        
        setFilmes(data.results)
    }    

    useEffect(() => {
        const pesquisaParametroQuery = `${pesquisarURL}?${apiKey}&query=${query}`

        getPesquisaFilmes(pesquisaParametroQuery);
    }, [query])
    

    return ( 
       <div className="container">
        <h2 className="title">
            Resultados para: <span className="query-text">{query}</span>
        </h2>
        <div className="filmes-container">
            {filmes.length === 0 && <p>Carregando...</p>}
            {filmes.length > 0 && filmes.map((filme) => <FilmeCard key={filme.id} filme={filme} />)}
        </div>
    </  div>
    )
}

export default Pesquisar;