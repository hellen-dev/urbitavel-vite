import { Col, Container, Row } from "react-grid-system";
import { Cabecalho } from "../componentes/Cabecalho/Cabecalho";
import { CampoTexto } from "../componentes/CampoTexto/CampoTexto";
import { Card } from "../componentes/Card/Card";
import { Estilos } from "../componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "../componentes/ProvedorTema/ProvedorTema";
import { Rodape } from "../componentes/Rodape/Rodape";
import { Tipografia } from "../componentes/Tipografia/Tipografia";
import { Botao } from "../componentes/Botao/Botao";
import { IconeInstagram } from "../componentes/Icones/IconeInstagram";
import { IconeTwitch } from "../componentes/Icones/IconeTwitch";
import { IconeTwitter } from "../componentes/Icones/IconeTwitter";
import { IconeWhatsApp } from "../componentes/Icones/IconeWhatsApp";
import { Link } from "../componentes/Link/Link";
import { ItemListaInline } from "../componentes/Lista/ItemListaInline";
import { ListaInline } from "../componentes/Lista/ListaInline";
import { ListaSupensa } from "../componentes/ListaSuspensa/ListaSuspensa";

const backgroundStyles = {
  backgroundImage: 'url(/fundinho.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '50vh',
};

const estadosBrasileiros = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]


const PaginaInicial = () => {
  return (
    <ProvedorTema style={backgroundStyles}>
      <Estilos />
      <Cabecalho>
        <Container>
          <Row align="center">
            <Col>
            </Col>

            <Col style={{ textAlign: 'left' }}>
              <Link>Página Inicial</Link>
            </Col>

            <Col style={{ textAlign: 'left' }}>
              <Link>Sobre Nós</Link>
            </Col>

            <Col style={{ textAlign: 'left' }}>
              <Link>Por Trás da Causa</Link>
            </Col>

            <Col style={{ textAlign: 'left' }}>
              <Link>Privacidade</Link>
            </Col>

            <Col style={{ textAlign: 'right' }}>
              <Link>Login</Link>
            </Col>


          </Row>
        </Container>
      </Cabecalho>
      
      <Container style={{ margin: '80px auto' }}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              {/* n vou precisar disso de tipografia */}
              <Tipografia variante="h1" componente="h1">
                Urbitável
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Cadastre-se no nosso site e se torne um membro do nosso projeto e torne o mundo um lugar sustentável.
              </Tipografia>
              <Row>
                <Col>
                <CampoTexto titulo="Nome Completo" />
                </Col>
              </Row>

              <Row>
                <Col lg={4} md={4} sm={4}>
                <ListaSupensa titulo="Estado" opcoes={estadosBrasileiros} />
                </Col>

                <Col lg={8} md={8} sm={8}>
                <CampoTexto titulo="Cidade" />
                </Col>
              </Row>

              <Row>
                <Col>
                <CampoTexto titulo="E-mail" />
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} sm={6}>
                <CampoTexto titulo="Senha" />
                </Col>

                <Col lg={6} md={6} sm={6}>
                <CampoTexto titulo="Repita a Senha" />
                </Col>
              </Row>

              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Botao variante="secundaria">
                    Anterior
                  </Botao>
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <div style={{textAlign: 'right'}}>
                    <Botao>
                      Próxima
                    </Botao>
                  </div>

                </Col>
              </Row>

            </Card>
          </Col>
        </Row>
        
      </Container>

      <Rodape>
        <Container>
          <Row align="center">
            <Col>
              
              <Tipografia variante="legenda" componente="legenda">
                Hellen Assis <br />
                Gabriel Machado <br />
                Bianca Dancs <br />
                Ana Laura Zerlin <br />
                 
              </Tipografia>
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Tipografia variante="legenda" componente="legenda">Acesse nossas redes:</Tipografia>
              <ListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para o WhatsApp">
                    <IconeWhatsApp />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Twitch">
                    <IconeTwitch />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Instagram">
                    <IconeInstagram />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Twitter">
                    <IconeTwitter />
                  </a>
                </ItemListaInline>
              </ListaInline>
            </Col>
          </Row>
        </Container>
      </Rodape>

    </ProvedorTema>
  );
}

export default PaginaInicial;