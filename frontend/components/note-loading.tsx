import { Skeleton } from "./ui/skeleton"
import { Button } from "./ui/button"

export default function NoteLoading() {
  return (
    <div>
      <Skeleton className="h-100 w-60 text-xl md:w-90 lg:w-120 xl:w-150 2xl:w-200" />
      <Button>Summarize the note</Button>
    </div>
  )
}
