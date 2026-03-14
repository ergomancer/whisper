"use client"

import { CreateNoteActionState } from "@/lib/types"
import { createNote } from "@/lib/actions"
import CreateNoteCard from "@/components/create-note-card"
import NoteData from "@/components/note-data"
import { useActionState } from "react"
import LoadingSkeleton from "@/components/loading-skeleton"

export default function Page() {
  const initialState: CreateNoteActionState = { success: false }

  const formManager = useActionState<CreateNoteActionState, FormData>(
    createNote,
    initialState
  )
  const [formState, createNoteAction, isPending] = formManager

  return (
    <div className="mt-5 mb-5 flex flex-col-reverse items-center justify-center lg:flex-row">
      <div className="w-[90vw] flex-[0.7] p-5 lg:border-r">
        {isPending ? (
          <LoadingSkeleton message="Creating your note..." />
        ) : formState.success ? (
          <NoteData createdNote={formState.data!} />
        ) : (
          <CreateNoteCard formManager={formManager} />
        )}
      </div>
      <div className="w-min-[100px] m-auto flex-[0.3] p-5">
        <ol className="flex flex-col gap-5 text-lg text-red-500">
          <li key="1">Create a note</li>
          <li key="2">Get the link and password</li>
          <li key="3">Share it</li>
        </ol>
      </div>
    </div>
  )
}
