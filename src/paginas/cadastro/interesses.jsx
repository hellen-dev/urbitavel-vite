import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import GrupoRadio from "../../componentes/Radio/GrupoRadio"
import { Col, Row } from "react-grid-system"
import { Botao } from "../../componentes/Botao/Botao"
import { Link, useNavigate } from "react-router-dom"
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario"
import { useEffect } from "react"

const opcoes = [
    {
        valor: 1,
        label: 'Quero ser um voluntário do Projeto Urbitável!',
    },
    {
        valor: 2,
        label: 'Quero reciclar meu lixo e trocar por pontos!',
    },
]

const Interesses = () => {

    const { 
        usuario, 
        setInteresse, 
        possoSelecionarInteresse 
    } = useCadastroUsuarioContext()

    const navegar = useNavigate()

    useEffect(() => {
        if (!possoSelecionarInteresse()) {
            navegar('/cadastro')
        }
    }, [navegar, possoSelecionarInteresse])

    return (<>
        <div style={{ textAlign: 'center' }}>
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
            </Tipografia>
            <Tipografia variante='h3' componente='h3'>
                Qual a área de interesse?
            </Tipografia>
        </div>
        <GrupoRadio 
            opcoes={opcoes} 
            valor={usuario.interesse} 
            onChange={setInteresse} 
        />
        <Row>
            <Col lg={6} md={6} sm={6}>
                <Link to="/cadastro">
                    <Botao variante="secundaria">
                        Anterior
                    </Botao>
                </Link>
            </Col>
            <Col lg={6} md={6} sm={6}>
                <div style={{ textAlign: 'right' }}>
                    <Link to='/cadastro/dados-pessoais'>
                        <Botao>
                            Próxima
                        </Botao>
                    </Link>
                </div>
            </Col>
        </Row>
    </>)
}

export default Interesses