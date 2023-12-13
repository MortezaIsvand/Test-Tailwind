"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-4 py-2 border-b border-zinc-400">
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                کامپوننت اول | NavigationMenu
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  ‌<button>لپ‌تاپ</button>
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <button>جاروبرقی</button>
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <button>لباسشویی</button>
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <button>موبایل</button>
                </NavigationMenuLink>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <button>یخچال</button>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-2 items-center">
        <button className="border rounded-md px-4 py-1.5">ورود | خروج</button>
        <Link href={"/"}>
          <ShoppingCart />
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
