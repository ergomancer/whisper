import NoteCard from "@/components/note-card"

export default async function Page({
  params,
}: {
  params: Promise<{ noteId: string }>
}) {
  const { noteId } = await params
  return (
    <div className="mt-5 mb-5 flex w-screen flex-col-reverse items-center justify-center lg:flex-row">
      <NoteCard noteId={noteId} />
    </div>
  )
}
