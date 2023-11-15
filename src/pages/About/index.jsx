import { Box, Typography } from '@mui/material'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function About(){
    return(
        <Box
            sx={{
                width: '100vw',
                maxHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Navbar />
            <Typography
                variant='h1'
                sx={{
                    fontSize: '50px',
                    margin: '10px 0px',
                    textTransform: 'uppercase',
                }}
            >sobre nós
            </Typography>

            <Box
                sx={{
                    backgroundColor: '#dedede',
                    width: '70%',
                    height: '40vh',
                    padding: '30px',
                }}
            >

                <Typography
                    variant='subtitle2'
                    sx={{
                        fontSize: '32px'
                    }}
                >
                        Somos uma empresa que vende vários tipos de cosméticos em seus mais de 50 anos de história, a empresa se tornou uma das marcas de cosméticos mais consagradas no Brasil e no Mundo Lançando inúmeras linhas de produtos que fizeram sucesso com a maioria de seus consumidores.
                </Typography>
            </Box>
            <Footer />
        </Box>
    )
}