import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

export default function CreateNoteForm({
  action,
}: {
  action: (payload: FormData) => void
}) {
  return (
    <form action={action} className="flex flex-col gap-5 space-y-3">
      <Textarea
        id="note"
        name="note"
        placeholder="Write your note within 500 characters"
        className="h-100 w-60 md:w-90 lg:w-120 xl:w-150 2xl:w-200"
      />
      <Button type="submit" className="place-self-end">
        Create
      </Button>
    </form>
  )
}
