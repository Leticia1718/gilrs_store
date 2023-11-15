import { Box, Typography } from '@mui/material'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Input from '../../components/Input'

export default function Contact(){
    return(
        <Box
            sx={{
                width: '100vw',
                maxHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                overflowY: 'scroll',
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
            >contato
            </Typography>
                <Input name='nome' />
                <Input name='email' />
                <Input name='telefone' />
                <Input name='mensagem' />
                
                <Box
                
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        width: '71.5vw'
                    }}>
                <Typography
                    sx={{
                        textAlign: 'left',
                        backgroundColor: '#d0e300',
                        margin: '10px',
                        justifySelf: 'flex-start',
                        padding: '4px 8px',
                    }}
                >Enviar</Typography>

                </Box>

            <Footer />
        </Box>
    )
}