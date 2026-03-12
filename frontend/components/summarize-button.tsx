import { Button } from "./ui/button"
import Link from "next/link"

export default function SummarizeButton({ noteId }: { noteId: string }) {
  return (
    <Link href={`/${noteId}/summary`}>
      <Button>Summarize</Button>
    </Link>
  )
}
