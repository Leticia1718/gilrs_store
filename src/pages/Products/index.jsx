import { Box, Typography } from '@mui/material'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Card from '../../components/Card'

export default function Products(){
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
                paddingBottom: '80px',
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
            >produtos
            </Typography>

            <Box
                sx={{
                    height: '42vh',
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Box>
            <Footer />
        </Box>
    )
}