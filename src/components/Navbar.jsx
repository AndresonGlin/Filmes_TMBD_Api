import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { BiSearchAlt2} from "react-icons/bi"

import './Navbar.css'

const Navbar = () => {

    const [pesquisar, setPesquisar] = useState("");    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!pesquisar) return 

        navigate(`/pesquisar?q=${pesquisar}`)
        setPesquisar("");
    }


    return (
            <div>
                <nav id='navbar'>
                    <h2>
                        <Link to="/">Filmes</Link>
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Pesquisar um filme" 
                            onChange={(e) => setPesquisar(e.target.value)}
                            value={pesquisar}
                        />
                        <button type="submit">
                            <BiSearchAlt2 />
                        </button>
                    </form>
                </nav>
            </div>
    )
}

export default Navbar;        
        
        
       