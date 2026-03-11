import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function GetNoteForm({
  action,
}: {
  action: (payload: FormData) => void
}) {
  return (
    <form action={action} className="flex flex-col gap-5 space-y-3">
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Enter password"
      />
      <Button type="submit" className="place-self-end">
        Unlock
      </Button>
    </form>
  )
}
