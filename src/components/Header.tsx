import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import SheetMenu from "./SheetMenu"

import LangSelect from "./LangSelect"
import ThemeSwitcher from "./ThemeSwitcher"
import getDarkModeStatus from "@/lib/getDarkModeStatus"

import { headerData } from "@/data/index.js";

import { IHeaderData } from "@/types/header.types"
import { EnRuKeys } from "@/types/lang.types"

const Header = ({ lang, telegram }: { lang: string, telegram: string }) => {

    const [linksWithChosenLang] = useState<IHeaderData[]>(headerData[lang as EnRuKeys]);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    
    useEffect(() => {
        getDarkModeStatus(setIsDarkMode);
    }, [])

    return (
        <header className="fixed top-0 w-screen inset-x-0 z-10 transition-all duration-500">
            <div className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 bg-white dark:bg-black">
                <SheetMenu lang={lang} isDarkMode={isDarkMode} />
                <a href="/" className="mr-6 hidden lg:flex">
                    <img src="/images/logo.png" className="h-8 w-8 rounded-full" alt="logo" />
                </a>
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        {linksWithChosenLang.map((link: IHeaderData) => (
                            <NavigationMenuLink key={link.name} asChild>
                                <a
                                    href={link.href}
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-light dark:bg-dark from-muted/50 to-muted p-6 py-2 no-underline outline-none focus:shadow-md text-nowrap"
                                >
                                    {link.name}
                                </a>
                            </NavigationMenuLink>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="ml-auto flex gap-2 px-4">
                    <ThemeSwitcher />
                    <LangSelect lang={lang} isDarkMode={isDarkMode} />
                    <Button variant={"ghost"} size="icon" className="">
                        <a href={telegram} className="rounded-full  bg-light dark:bg-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="38px" height="38px"><path fill={isDarkMode ? '#efefef' : '#333333'} d="M32,10c12.15,0,22,9.85,22,22s-9.85,22-22,22s-22-9.85-22-22S19.85,10,32,10z M39.589,40.968	c0.404-1.241,2.301-13.615,2.534-16.054c0.071-0.738-0.163-1.229-0.619-1.449c-0.553-0.265-1.371-0.133-2.322,0.21	c-1.303,0.47-17.958,7.541-18.92,7.951c-0.912,0.388-1.775,0.81-1.775,1.423c0,0.431,0.256,0.673,0.96,0.924	c0.732,0.261,2.577,0.82,3.668,1.121c1.05,0.29,2.243,0.038,2.913-0.378c0.709-0.441,8.901-5.921,9.488-6.402	c0.587-0.48,1.056,0.135,0.576,0.616c-0.48,0.48-6.102,5.937-6.844,6.693c-0.901,0.917-0.262,1.868,0.343,2.249	c0.689,0.435,5.649,3.761,6.396,4.295c0.747,0.534,1.504,0.776,2.198,0.776C38.879,42.942,39.244,42.028,39.589,40.968z" /></svg>
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    )
}



export default Header