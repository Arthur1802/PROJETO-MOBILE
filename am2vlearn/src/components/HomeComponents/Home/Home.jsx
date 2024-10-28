import './Home.css'

const Home = () => {
    return (
        <div className = "home-container">
            <h1>Bem-vindo(a), NOME</h1>

            <section className = "modulo-section">
                <div className = "modulo-containers">Módulo HTML<i className = "fa-solid fa-play"></i></div>
                <div className = "modulo-containers">Módulo CSS<i className = "fa-solid fa-play"></i></div>
                <div className = "modulo-containers">Módulo JavaScript<i className = "fa-solid fa-play"></i></div>
                <div className = "modulo-containers">Módulo Todos<i className = "fa-solid fa-play"></i></div>
            </section>
        </div>
    )
}

export default Home