import { CreateNoteActionState } from "@/lib/types"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"

export default function CreateNoteForm({
  formManager,
}: {
  formManager: [CreateNoteActionState, (payload: FormData) => void, boolean]
}) {
  const [formState, createNoteAction, isPending] = formManager
  return (
    <form
      action={createNoteAction}
      className="flex flex-col gap-5 space-y-3"
      aria-describedby="note-error"
    >
      <Textarea
        id="note"
        name="note"
        placeholder="Write your note within 500 characters"
        className="h-100 w-[80%]"
        aria-describedby="note-error"
      />
      <div
        id="note-error"
        aria-live="polite"
        aria-atomic="true"
        className="place-self-end"
      >
        {formState.errors &&
          formState.errors.note!.map((err: string) => {
            return (
              <p className="mt-2 text-sm text-red-500" key={err}>
                {err}
              </p>
            )
          })}
      </div>
      <Button type="submit" disabled={isPending} className="place-self-end">
        Create
      </Button>
    </form>
  )
}
