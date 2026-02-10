import { Box } from "@mui/material";
import Link from "next/link";

const APOD_KEY: string = process.env.NASA_API_KEY || "No API Key Found";

export default function ApodPage() {
    return (
        <Box>
            <Link href="/">Back</Link>
            <div>API Key: {APOD_KEY}</div>
        </Box>
    )
}