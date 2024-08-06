import React, { useEffect, useState } from 'react';
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { SunMoon } from 'lucide-react';
import useTheme from '@/hooks/useTheme';
const ThemeSwitcher = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div className='flex items-center'>
            <div className="flex items-center space-x-2">
                <Switch checked={isDarkMode} onCheckedChange={toggleTheme} id="theme-switcher" className='border-2 border-black dark:border-white' />
                <Label htmlFor="theme-switcher"><SunMoon color={isDarkMode ? 'white' : 'black'} /></Label>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
