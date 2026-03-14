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
      className="flex flex-col justify-center gap-5 space-y-3"
      aria-describedby="form-error"
    >
      <div className="min-h-50 w-[95%]">
        <Textarea
          id="note"
          name="note"
          placeholder="Write your note within 500 characters"
          className="min-h-45"
          aria-describedby="note-error"
        />
        <div
          id="note-error"
          aria-live="polite"
          aria-atomic="true"
          className="place-self-end"
        >
          {formState.fieldErrors?.note &&
            formState.fieldErrors.note.map((err: string) => {
              return (
                <p className="mt-2 text-sm text-red-500" key={err}>
                  {err}
                </p>
              )
            })}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-3 lg:flex-row">
        <div className="flex flex-row items-center gap-3">
          <label htmlFor="expiry" className="text-lg">
            Expiry
          </label>
          <input
            type="date"
            id="expiry"
            name="expiry"
            aria-describedby="expiry-error"
            className="text-lg"
          />
          <div
            id="expiry-error"
            aria-live="polite"
            aria-atomic="true"
            className="place-self-end"
          >
            {formState.fieldErrors?.expiry &&
              formState.fieldErrors.expiry.map((err: string) => {
                return (
                  <p className="mt-2 text-sm text-red-500" key={err}>
                    {err}
                  </p>
                )
              })}
          </div>
        </div>
        <Button type="submit" disabled={isPending} className="place-self-end">
          Create
        </Button>
      </div>
      <div
        id="form-error"
        aria-live="polite"
        aria-atomic="true"
        className="place-self-end"
      >
        {formState.formErrors &&
          formState.formErrors.map((err: string) => {
            return (
              <p className="mt-2 text-sm text-red-500" key={err}>
                {err}
              </p>
            )
          })}
      </div>
    </form>
  )
}
