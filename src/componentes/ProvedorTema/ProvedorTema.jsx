import { ThemeProvider } from "@emotion/react"

const tema = {
    cores: {
        branco: '#FFF',
        atencao: '',
        focus: '#16280D',

        primarias: {
            a: '#2C4928',
            b: '#58774C',
            c: '',
        },

        secundarias: {
            a: '#EBEAF9',
            b: '',
            c: '',
        },

        neutras: {
            a: '#373737',
            b: '',
            c: '',
        },

        dark: {
            a: '',
            b: '#B61B00',
        },
    },

    espacamentos: {
        xs: '8px',
        s : '16px',
        l : '32px',
        xl: '48px',
    },
    fontFamily : " 'Montserrat', sans-serif "
}

export const ProvedorTema = ({ children }) => {
    return <ThemeProvider theme={tema}>
        { children }
    </ThemeProvider>
}