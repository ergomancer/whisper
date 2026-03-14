import NoteCard from "@/components/note-card"

export default async function Page({
  params,
}: {
  params: Promise<{ noteId: string }>
}) {
  const { noteId } = await params
  return (
    <div className="mt-5 mb-5 flex w-screen items-center justify-center">
      <NoteCard noteId={noteId} />
    </div>
  )
}
