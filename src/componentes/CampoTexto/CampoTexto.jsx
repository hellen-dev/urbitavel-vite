import './styles.scss'; // Importe o arquivo SASS aqui

export const CampoTexto = ({ titulo, valor, onChange, tipo = 'text' }) => {
    return (
        <div className="label-estilizada">
            {titulo}
            <input 
            className="input-estilizado"  
            value={valor} 
            onChange = { evento => onChange(evento.target.value)}
            type={tipo}
        />
        </div>
    );
};

export default CampoTexto;