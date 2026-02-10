import { Box, Typography, CircularProgress } from "@mui/material";

export default function Loading() {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center', 
                minHeight: '200px',
                gap: 2
            }}
        >
            <CircularProgress size={60} />
            <Typography variant="h6" color="text.secondary">
                Loading NASA Astronomy Picture of the Day...
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Fetching data from NASA API
            </Typography>
        </Box>
    );
}