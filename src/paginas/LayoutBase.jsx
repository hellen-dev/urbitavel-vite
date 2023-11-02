import { Col, Container, Row } from "react-grid-system";
import { Cabecalho } from "../componentes/Cabecalho/Cabecalho";
import { Link } from "../componentes/Link/Link";
import { Rodape } from "../componentes/Rodape/Rodape";
import { Tipografia } from "../componentes/Tipografia/Tipografia";
import { ListaInline } from "../componentes/Lista/ListaInline";
import { ItemListaInline } from "../componentes/Lista/ItemListaInline";
import { IconeWhatsApp } from "../componentes/Icones/IconeWhatsApp";
import { IconeTwitch } from "../componentes/Icones/IconeTwitch";
import { IconeInstagram } from "../componentes/Icones/IconeInstagram";
import { IconeTwitter } from "../componentes/Icones/IconeTwitter";
import { Outlet } from "react-router-dom";


const backgroundStyles = {
  backgroundImage: 'url(/fundinho.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '50vh',
};


const LayoutBase = () => {
  return (
    <div style={backgroundStyles}>
      <Cabecalho>
        <Container>
          <Row align="center">
            <Col>
            
            </Col>

            <Col style={{ textAlign: "left" }}>
              <Link>Página Inicial</Link>
            </Col>

            <Col style={{ textAlign: "left" }}>
              <Link>Sobre Nós</Link>
            </Col>

            <Col style={{ textAlign: "left" }}>
              <Link>Por Trás da Causa</Link>
            </Col>

            <Col style={{ textAlign: "left" }}>
              <Link>Privacidade</Link>
            </Col>

            <Col style={{ textAlign: "right" }}>
              <Link>Login</Link>
            </Col>
          </Row>
        </Container>
      </Cabecalho>

        <Container>
          <Outlet />
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
            <Col style={{ textAlign: "right" }}>
              <Tipografia variante="legenda" componente="legenda">
                Acesse nossas redes:
              </Tipografia>
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
    </div>
  );
};

export default LayoutBase;
