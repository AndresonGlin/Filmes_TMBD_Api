import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import FilmeCard from "../components/FilmeCard";

import './Filmes.css'

const filmesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Filmes = () => {
    const {id} = useParams()
    const [filme, setFilme] = useState(null)

    const getFilme = async(url) => {
        const res = await fetch(url);
        const data = await res.json();

        setFilme(data)
    }

    const formatacaoOrcamento = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    useEffect(() => {
        const filmeUrl = `${filmesURL}${id}?${apiKey}`
        getFilme(filmeUrl)
    },[])


    return (
        <div className="filme-page">
            {filme && (
                <>
                   <FilmeCard filme={filme} showLink={false} />
                   <p className="tagline">{filme.tagline}</p>
                   <div className="info">
                        <h3>
                            <BsWallet2 /> Orçamento:
                        </h3>
                        <p>{formatacaoOrcamento(filme.budget)}</p>
                   </div>
                    <div className="info">
                        <h3>
                            <BsGraphUp /> Receita:
                        </h3>
                        <p>{formatacaoOrcamento(filme.revenue)}</p>
                   </div>
                    <div className="info">
                        <h3>
                            <BsHourglassSplit /> Duração:
                        </h3>
                        <p>{filme.runtime} minutos</p>
                   </div>                   
                    <div className="info description">
                        <h3>
                            <BsFillFileEarmarkTextFill /> Descrição:
                        </h3>
                        <p>{filme.overview}</p>
                   </div>                   
                </>
             )}
         </div>
    )
}

export default Filmes;