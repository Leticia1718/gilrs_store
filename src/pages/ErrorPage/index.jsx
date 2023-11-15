import { Box, Typography } from '@mui/material'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ErrorPage(){
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
                        fontSize: '70px'
                    }}
                >
                        Página não encontrada no momento
                </Typography>
            </Box>
            
            
            <Footer />
        </Box>
    )
}