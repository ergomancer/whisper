import Summary from "@/components/summary"
import { Suspense } from "react"
import SummaryLoading from "@/components/summary-loading"

export default async function Page({
  params,
}: {
  params: Promise<{ noteId: string }>
}) {
  const { noteId } = await params
  return (
    <Suspense fallback={<SummaryLoading />}>
      <Summary noteId={noteId} />
    </Suspense>
  )
}
