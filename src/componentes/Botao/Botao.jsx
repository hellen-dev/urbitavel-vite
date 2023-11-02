import './BotaoStyle.scss'

export const Botao = ({ children, variante = 'primaria' }) => {
    if (variante === 'primaria') {
        return <button className="botao-primario"> {/* Use a classe SASS */}
            {children}
        </button>
    }
    return <button className="botao-secundario"> {/* Use a classe SASS */}
        {children}
    </button>
}