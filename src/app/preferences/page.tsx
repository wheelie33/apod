import { Box } from "@mui/material";
import Link from "next/link";
import ThemeClient from "./components/ThemeClient";



export default function PreferencesPage() {
    return (
        <Box>
            <Link href="/">Back</Link>
            
            <ThemeClient />
        </Box>
    )
}