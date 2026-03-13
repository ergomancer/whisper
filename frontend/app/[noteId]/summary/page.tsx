import { summarize } from "@/lib/data"
import Summary from "@/components/summary"
import { Suspense } from "react"
import SummaryLoading from "@/components/summary-loading"

export default async function Page({
  params,
}: {
  params: Promise<{ noteId: string }>
}) {
  const { noteId } = await params
  const { summary } = await summarize(noteId)
  return (
    <Suspense fallback={<SummaryLoading />}>
      <Summary summary={summary} />
    </Suspense>
  )
}
