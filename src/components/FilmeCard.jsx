import { Link } from "react-router-dom"

import { FaStar} from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG;

const FilmeCard = ({filme, showLink = true}) => {
    return (
        <div className="filme-card">
            <img src={imageUrl + filme.poster_path} alt={filme.title} />
            <h2>{filme.title}</h2>
            <p>
                <FaStar /> {filme.vote_average}
            </p>
            {/* retorno do dir main */}
            {showLink && <Link to={`/filmes/${filme.id}`}>Detalhes</Link>}

        </div>
    )
}

export default FilmeCard;