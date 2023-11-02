import { Col, Row } from "react-grid-system"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { Link } from "../../componentes/Link/Link"

import { Route, Link as RouterLink} from 'react-router-dom'

import cliente from './assets/cliente.png'
import empresa from './assets/empresa.png' //mudar imagens
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario"

const SelecaoCliente = () => {
   const { setPerfil } = useCadastroUsuarioContext()
    return(<div style={{ textAlign: 'center' }}>
        <Tipografia variante="h1" componente="h1">
            Crie seu cadastro
        </Tipografia>

        <Tipografia variante='h3' componente='h3'>
            Como podemos te ajudar?
        </Tipografia>

        <Row>
            <Col md={6} sm={12}>
                <RouterLink to='interesses' onClick={() => setPerfil('cliente')}>
                    <img src={cliente} alt="Imagem Cliente"></img>
                    <Tipografia variante='body' componente='body'>
                        Sou cliente e quero contribuir!
                    </Tipografia>
                </RouterLink>
            </Col>
            <Col md={6} sm={12}>
                <img src={empresa} alt="Imagem Empresa"></img>
                <Tipografia variante='body' componente='body'>
                    Sou empresa e quero participar!
                </Tipografia>
            </Col>
        </Row>
        <div>
            <Tipografia variante="body2" componente="body2">
                Já tem conta?
            </Tipografia>
            <p>
                <Link variante="secundaria">Faça login!</Link>
            </p>
        </div>
    </div>)
}

export default SelecaoCliente