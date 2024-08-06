import { useState } from "react";
import { MenuIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@radix-ui/react-navigation-menu"

import links from "@/data/header.json";

import { IHeaderData } from "@/types/header.types";
import { EnRuKeys } from "@/types/lang.types";

function SheetMenu({ lang, isDarkMode }: { lang: string, isDarkMode?: boolean }) {

  const [linksWithChosenLang] = useState<IHeaderData[]>(links[(lang as EnRuKeys)]);
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="lg:hidden bg-light dark:bg-dark"><MenuIcon color={isDarkMode ? '#efefef' : '#333333'} /></Button>
      </SheetTrigger>
      <SheetContent className="bg-light dark:bg-dark">

        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <NavigationMenu className="">
          <NavigationMenuList className="flex flex-col gap-5">
            {linksWithChosenLang.map((link) => (
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

        <SheetFooter>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default SheetMenu