import { Box, Typography } from '@mui/material'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Card from '../../components/Card'

export default function Home(){
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
            >ofertas
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                }}
            >
                <Card />
                <Card />
                <Card />
                <Card />
            </Box>
            <Footer />
        </Box>
    )
}