import { CreateNoteCardState } from "@/lib/types"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

export default function CreateNoteForm({
  state,
  action,
}: {
  state: CreateNoteCardState
  action: (payload: FormData) => void
}) {
  return (
    <form
      action={action}
      className="flex flex-col gap-5 space-y-3"
      aria-describedby="note-error"
    >
      <Textarea
        id="note"
        name="note"
        placeholder="Write your note within 500 characters"
        className="h-100 w-60 md:w-90 lg:w-120 xl:w-150 2xl:w-200"
        aria-describedby="note-error"
      />
      <div
        id="note-error"
        aria-live="polite"
        aria-atomic="true"
        className="place-self-end"
      >
        {state.errors &&
          state.errors.note!.map((err: string) => {
            return (
              <p className="mt-2 text-sm text-red-500" key={err}>
                {err}
              </p>
            )
          })}
      </div>
      <Button type="submit" className="place-self-end">
        Create
      </Button>
    </form>
  )
}
