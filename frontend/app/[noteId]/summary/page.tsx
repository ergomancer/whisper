import { summarize } from "@/lib/data"
import Summary from "@/components/summary"

export default async function Page({
  params,
}: {
  params: Promise<{ noteId: string }>
}) {
  const { noteId } = await params
  const { summary } = await summarize(noteId)
  return <Summary summary={summary} />
}
