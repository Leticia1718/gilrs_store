import { Skeleton } from "@mui/material";

export default function Card(){
    return (
        <Skeleton
            sx={{
                width: '240px',
                height: '240px',
                margin: '20px'
            }}
        />
    )
}