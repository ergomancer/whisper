import SummarizeButton from "./summarize-button"

export default function Note({
  note,
  noteId,
}: {
  note: string
  noteId: string
}) {
  return (
    <div>
      <p className="h-100 w-60 text-xl md:w-90 lg:w-120 xl:w-150 2xl:w-200">
        {note}
      </p>
      <SummarizeButton noteId={noteId}/>
    </div>
  )
}
