
import { Suspense } from 'react';
import { Box, Typography, CircularProgress, Card, CardContent } from "@mui/material";
import Link from "next/link";
import RefreshButton from './components/RefreshButton';

// Server-side data fetching function
async function getProfile() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    return {
        firstName: "John",
        lastName: "Doe"
    };
}

// Server Component - no 'use client' needed
async function ProfileDisplay() {
    const profile = await getProfile();
    
    return (
        <Card sx={{ mt: 2 }}>
            <CardContent>
                <Typography variant="h6">Profile</Typography>
                <Typography>First Name: {profile.firstName}</Typography>
                <Typography>Last Name: {profile.lastName}</Typography>
            </CardContent>
        </Card>
    );
}

// Server Component page
export default function NewReactPage() {
    return (
        <Box sx={{ p: 3 }}>
            <Link href="/">← Back</Link>
            
            <Typography variant="h4" gutterBottom sx={{ mt: 2 }}>
                Standard NextJS Server Component
            </Typography>

            <Suspense fallback={
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <CircularProgress />
                    <Typography sx={{ mt: 1 }}>Fetching Profile...</Typography>
                </Box>
            }>

            <RefreshButton />
                <ProfileDisplay />
            </Suspense>
        </Box>
    );
}