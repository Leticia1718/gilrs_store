import { Link } from 'react-router-dom'
import { Box, Typography } from "@mui/material"

export default function Navbar(){
    return(
        <Box
            sx={{
                backgroundColor: '#ffaf3e',
                width: '100%',
                position: 'absolute',
                left: 0,
                top: 0,
                height: '100px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Link to='/'>
                <Typography
                    sx={{
                        color: '#ffffff',
                        margin: '0px 20px',
                        textTransform: 'uppercase',
                    }}
                >Home</Typography>
            </Link>

            <Link to='/products'>
            <Typography
                    sx={{
                        color: '#ffffff',
                        margin: '0px 20px',
                        textTransform: 'uppercase',
                    }}
                >Produtos</Typography>
            </Link>
            <Link to='/contact'>
            <Typography
                    sx={{
                        color: '#ffffff',
                        margin: '0px 20px',
                        textTransform: 'uppercase',
                    }}
                >Contato</Typography>
            </Link>
            <Link to='/about'>
            <Typography
                    sx={{
                        color: '#ffffff',
                        margin: '0px 20px',
                        textTransform: 'uppercase',
                    }}
                >Sobre</Typography>
            </Link>
            <Link to='/error'>
            <Typography
                    sx={{
                        color: '#ffffff',
                        margin: '0px 20px',
                        textTransform: 'uppercase',
                    }}
                >Erro</Typography>
            </Link>
        </Box>
    )
}