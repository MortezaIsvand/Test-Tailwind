"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const page = () => {
  const { toast } = useToast();

  return (
    <div className="px-16 py-4 flex flex-col gap-12 items-start">
      <div className="flex items-center gap-8">
        <div>کامپوننت دوم: Dropdown Menu</div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="border px-4 py-1.5 rounded-md bg-stone-50">
              کلیک کن
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-right">
              <DropdownMenuLabel className="text-right">
                حساب من
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-right">
                پروفایل
              </DropdownMenuItem>
              <DropdownMenuItem className="text-right">
                صورتحساب
              </DropdownMenuItem>
              <DropdownMenuItem className="text-right">عضویت</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex gap-24 items-center">
        <div>کامپوننت سوم: Toast</div>
        <div>
          <button
            className="border px-4 py-1.5 rounded-md bg-stone-50"
            onClick={() => {
              toast({
                title: "کامپوننت سوم",
                description: "آیتم با موفقیت اضافه شد.",
              });
            }}
          >
            کلیک کن
          </button>
        </div>
      </div>
      <div className="flex gap-24 items-center">
        <div>کامپوننت چهارم: Dialog</div>
        <div>
          <Dialog>
            <DialogTrigger className="border px-4 py-1.5 rounded-md bg-stone-50">
              باز کن
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center">آیا مطمئنید؟</DialogTitle>
                <DialogDescription className="text-right">
                  این اقدام قابل بازگشت نیست. حساب شما به طور دائم حذف می‌شود و
                  تمام داد‌هایتان از سرور ما پاک خواهد شد.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="max-w-lg flex gap-8 items-center">
        <div>کامپوننت پنجم: Accoardion</div>
        <div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                چه لوازمی می‌توان از فروشگاه کارت بخرم
              </AccordionTrigger>
              <AccordionContent>
                ماشین لباسشویی، یخچال، تلویزیون و...
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>می‌تونم قسطی بخرم؟</AccordionTrigger>
              <AccordionContent>البته</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>فرایند خرید چگونه است؟</AccordionTrigger>
              <AccordionContent>از لینگ راهنما استفاده کنید.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="flex gap-8">
        <div>کامپوننت ششم: Hover Card</div>
        <div>
          <HoverCard>
            <HoverCardTrigger className="underline cursor-pointer">
              هاور کن
            </HoverCardTrigger>
            <HoverCardContent>
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <div>کامپوننت هفتم: Menubar</div>
        <div>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Find</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Search the web</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Find...</MenubarItem>
                    <MenubarItem>Find Next</MenubarItem>
                    <MenubarItem>Find Previous</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem>
                  Always Show Bookmarks Bar
                </MenubarCheckboxItem>
                <MenubarCheckboxItem checked>
                  Always Show Full URLs
                </MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem inset>
                  Reload <MenubarShortcut>⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled inset>
                  Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Hide Sidebar</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Profiles</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup value="benoit">
                  <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                  <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                  <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div>کامپوننت هشتم: Skeleton</div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-20">
        <div>کامپوننت نهم: Sheet</div>
        <div>
          <Sheet>
            <SheetTrigger className="border px-4 py-1.5 rounded-md bg-stone-50 text-right">
              باز کن
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-right mt-12">
                  فروشگاه کارت
                </SheetTitle>
                <SheetDescription className="text-right mt-12">
                  در این فروشگاه می‌توانید طیف وسیعی از محصولات خانگی را قسطی
                  خرید نمایید.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};
export default page;
