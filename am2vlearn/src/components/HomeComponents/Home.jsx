import { useNavigate } from 'react-router-dom'
import { capitalize } from '../../utils/functions'
import Usuario from '../../model/Usuario/Usuario'

const Home = () => {
    const navigate = useNavigate()
    const user_nome = Usuario.getNome()
    const user_modules = Usuario.getModules()

    return (
        <div>
            <h2>Olá, {user_nome}!</h2>

            {user_modules.map((module, index) => (
                <button key = {index} onClick = {navigate(`/game${capitalize(module.nome)}`)}>{module.name}<i className = "fa-solid fa-play"></i></button>
            ))}
        </div>
    )
}

export default Home