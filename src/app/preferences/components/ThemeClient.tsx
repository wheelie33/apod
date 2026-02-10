'use client'

import { LightMode, DarkMode, SettingsBrightness } from "@mui/icons-material";
import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";


export default function ThemeClient() {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }

    return (<Box>

            <Typography variant="subtitle1" sx={{ mr: 2, alignSelf: "center" }}>
                Theme:
            </Typography>

            <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={(event, newMode) => {
                    if (newMode !== null) {
                        setMode(newMode);
                    }
                }}
                aria-label="theme mode selection"
            >
                <ToggleButton value="light" aria-label="light mode">
                    <LightMode sx={{ marginRight: 1 }} />
                    Light
                </ToggleButton>
                <ToggleButton value="system" aria-label="system mode">
                    <SettingsBrightness sx={{ marginRight: 1 }} />
                    System ({window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light'})
                </ToggleButton>
                <ToggleButton value="dark" aria-label="dark mode">
                    <DarkMode sx={{ marginRight: 1 }} />
                    Dark
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>);

            }