export default function GetNoteForm({
  action,
}: {
  action: (payload: FormData) => void
}) {
  return (
    <form action={action} className="space-y-3">
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter password"
      />
      <button type="submit">Unlock</button>
    </form>
  )
}
