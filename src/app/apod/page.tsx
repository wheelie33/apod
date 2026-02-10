import { Box, Typography } from "@mui/material";
import Link from "next/link";

const APOD_KEY: string = process.env.NASA_API_KEY || "No API Key Found";
const APOD_URL: string = `https://api.nasa.gov/planetary/apod?api_key=${APOD_KEY}`;

interface ApodData {
    date: string;
    explanation: string;
    hdurl?: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

async function fetchApodData(): Promise<ApodData> {
    const response = await fetch(APOD_URL, {
        next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
        throw new Error(`Failed to fetch APOD data: ${response.status}`);
    }
    
    return response.json();
}

export default async function ApodPage() {
    let apodData: ApodData | null = null;
    let error: string | null = null;

    try {
        apodData = await fetchApodData();
    } catch (err) {
        error = err instanceof Error ? err.message : 'An unknown error occurred';
    }

    return (
        <Box>
            <Link href="/">Back</Link>
            <Typography>NASA API Key: {APOD_KEY}</Typography>
            
            {error && (
                <Typography color="error" sx={{ mt: 2 }}>
                    Error: {error}
                </Typography>
            )}
            
            {apodData && (
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        {apodData.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        Date: {apodData.date}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        {apodData.explanation}
                    </Typography>
                    {apodData.media_type === 'image' && (
                        <Box
                            border={1}
                            borderColor="grey.300"
                            borderRadius={2}
                            component="img"
                            src={apodData.url}
                            alt={apodData.title}
                            sx={{ maxWidth: '100%', height: 'auto' }}
                        />
                    )}
                </Box>
            )}
        </Box>
    )
}