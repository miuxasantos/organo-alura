import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [mensagem, setMensagem] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form submetido =>', nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

        setMensagem('Card criado!')
        setTimeout(() => setMensagem(''), 3000)
    }
    
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço de imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Times" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
                {mensagem ? <p>{mensagem}</p> : ''}
            </form>
        </section> 
    );

};

export default Formulario;