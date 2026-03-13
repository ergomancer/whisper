import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { NoteCardState } from "@/lib/types"

export default function UnlockNoteForm({
  state,
  action,
}: {
  state: NoteCardState
  action: (payload: FormData) => void
}) {
  return (
    <form
      action={action}
      className="flex flex-col gap-5 space-y-3"
      aria-describedby="password-error"
    >
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Enter password"
        aria-describedby="password-error"
      />
      <div
        id="password-error"
        aria-live="polite"
        aria-atomic="true"
        className="place-self-end"
      >
        {state.errors &&
          state.errors.password!.map((err: string) => (
            <p className="mt-2 text-sm text-red-500" key={err}>
              {err}
            </p>
          ))}
      </div>
      <Button type="submit" className="place-self-end">
        Unlock
      </Button>
    </form>
  )
}
