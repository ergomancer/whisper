import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import Logo from "./logo"

export default function Header() {
  return (
    <header className="sticky top-0 flex w-full items-center gap-2 px-2 py-2 backdrop-blur-xs backdrop-opacity-100 md:px-3 lg:gap-3 lg:px-4 lg:py-1.75 xl:px-4.5 2xl:gap-4 2xl:px-5 2xl:py-1.5">
      <Link href={"/"} className="flex-1">
        <Logo />
      </Link>
      <ModeToggle />
    </header>
  )
}
