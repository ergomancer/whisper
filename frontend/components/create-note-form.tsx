export default function CreateNoteForm({
  action,
}: {
  action: (payload: FormData) => void
}) {
  return (
    <form action={action} className="space-y-3">
      <input
        type="textarea"
        id="note"
        name="note"
        placeholder="Write your note"
      />
      <button type="submit">Create</button>
    </form>
  )
}
