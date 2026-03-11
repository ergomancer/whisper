import NoteCard from "@/components/note-card"

export default async function Page({
  params,
}: {
  params: Promise<{ noteId: string }>
}) {
  const { noteId } = await params
  return <NoteCard noteId={noteId} />
}
