import { HugeiconsIcon } from "@hugeicons/react"
import {
  GithubIcon,
  Linkedin01Icon,
  NewTwitterIcon,
  Mail02Icon,
  Call02Icon,
} from "@hugeicons/core-free-icons"

const entries = [
  { icon: GithubIcon, link: "https://github.com/ergomancer/diddit" },
  { icon: Linkedin01Icon, link: "https://linkedin.com/in/ergomancer" },
  { icon: NewTwitterIcon, link: "https://x.com/ergomancer" },
  { icon: Mail02Icon, link: "mailto:akashkhetan044@gmail.com" },
  { icon: Call02Icon, link: "tel:+917003686821 " },
]

export default function Footer() {
  return (
    <footer className="fixed bottom-0 flex w-full items-center justify-evenly gap-2 px-2 py-2 text-xs text-muted-foreground backdrop-blur-xs backdrop-opacity-100 md:px-3 lg:gap-3 lg:px-4 lg:py-1.75 xl:px-4.5 2xl:gap-4 2xl:px-5 2xl:py-1.5">
      <span>Made by @ergomancer</span>
      {entries.map((entry, index) => {
        return (
          <a
            href={entry.link}
            rel="noopener noreferrer"
            target="_blank"
            key={index}
          >
            <HugeiconsIcon icon={entry.icon} />
          </a>
        )
      })}
    </footer>
  )
}
