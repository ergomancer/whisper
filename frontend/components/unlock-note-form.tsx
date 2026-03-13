import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { UnlockNoteActionState } from "@/lib/types"

export default function UnlockNoteForm({
  formManager,
}: {
  formManager: [UnlockNoteActionState, (payload: FormData) => void, boolean]
}) {
  const [formState, unlockNoteAction, isPending] = formManager
  return (
    <form
      action={unlockNoteAction}
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
        {formState.errors &&
          formState.errors.password!.map((err: string) => (
            <p className="mt-2 text-sm text-red-500" key={err}>
              {err}
            </p>
          ))}
      </div>
      <Button type="submit" className="place-self-end" disabled={isPending}>
        Unlock
      </Button>
    </form>
  )
}
