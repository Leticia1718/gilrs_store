import { Box, Typography } from '@mui/material'

export default function Input({ name }){
    return(
        <Box>
            <Typography
                sx={{
                    fontSize: '24px',
                    textAlign: 'left',
                    textTransform: 'uppercase',
                }}
                variant='subtitle2'
            >
                {name}
            </Typography>
            {name == 'mensagem' ? (
                <Box
                sx={{
                    width: '70vw',
                    height: '110px',
                    backgroundColor: '#b3b3b3'
                }}
                >
                </Box>
            ) : (
                <Box
                    sx={{
                        width: '70vw',
                        height: '25px',
                        backgroundColor: '#b3b3b3'
                    }}
                >
                </Box>
            )}
        </Box>
    )
}