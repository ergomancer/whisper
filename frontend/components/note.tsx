"use client"

import { Button } from "./ui/button"
import { useActionState } from "react"
import { summarize } from "@/lib/actions"
import Summary from "./summary"
import LoadingSkeleton from "./loading-skeleton"

export default function Note({ note }: { note: string }) {
  const initialState = { success: false, summary: "" }
  const summarizeNote = summarize.bind(null, note)
  const [summaryState, summarizeAction, isPending] = useActionState(
    summarizeNote,
    initialState
  )
  return (
    <div className="content">
      <p className="text-md mb-5">{note}</p>
      {!isPending ? (
        !summaryState.summary ? (
          <form action={summarizeAction}>
            <Button>Summarize this note</Button>
          </form>
        ) : (
          <Summary summary={summaryState.summary} />
        )
      ) : (
        <LoadingSkeleton message="Generating summary..." />
      )}
    </div>
  )
}
