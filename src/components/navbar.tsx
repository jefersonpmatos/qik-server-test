import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Hamburger } from "@/assets/icons/Hamburger";

export const Navbar = () => {
  return (
    <header className="sticky top-0 flex justify-between md:justify-center items-center h-16 border-b bg-primary px-4 md:px-6 text-white">
      <nav className="hidden md:flex md:flex-row md:items-center md:gap-5 lg:gap-6 text-lg font-medium">
        <Button variant="ghost" className="mr-auto">
          Menu
        </Button>
      </nav>

      <div className="ml-auto block md:hidden" />

      <div className="w-full text-center -mr-11 block md:hidden text-lg ">
        Menu
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
            <Hamburger />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <div>MENU</div>{" "}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
