import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='rodape'>
            <div>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/AluraCursosOnline/?locale=pt_BR" target="_blank">
                            <img src="/imagens/imagens/fb.png" alt='Facebook logo'></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/aluraonline?lang=en" target="_blank">
                            <img src="/imagens/imagens/tw.png" alt="Twitter logo"></img>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/aluraonline/?hl=en" target="_blank">
                            <img src="/imagens/imagens/ig.png"  alt="Instagram logo" ></img>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <img src='/imagens/imagens/logo.png' alt='Alura logo'></img>
            </div>
            <div>
                <p>Desenvolvido por Alura</p>
            </div>

        </footer>
    )
}

export default Rodape