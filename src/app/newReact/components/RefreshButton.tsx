'use client';

import { useState } from 'react';
import { Button } from "@mui/material";
import { useRouter } from 'next/navigation';

export default function RefreshButton() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
   
    const handleRefresh = () => {
        setIsLoading(true);
        // Refresh the page to reload server component
        router.refresh();
    };

    return (
        <Button 
            variant="contained" 
            onClick={handleRefresh}
            disabled={isLoading}
            sx={{ mb: 2 }}
        >
            {isLoading ? 'Loading...' : 'Refresh Profile'}
        </Button>
    );
}