"use client"

import { useActionState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import type { UnlockNoteActionState } from "../lib/types"
import { unlockNote } from "@/lib/actions"
import UnlockNoteForm from "./unlock-note-form"
import Note from "./note"
import LoadingSkeleton from "./loading-skeleton"

export default function NoteCard({ noteId }: { noteId: string }) {
  const initialState: UnlockNoteActionState = {
    success: false,
  }
  const unlockNoteById = unlockNote.bind(null, noteId)
  const formManager = useActionState<UnlockNoteActionState, FormData>(
    unlockNoteById,
    initialState
  )
  const [formState, unlockNoteAction, isPending] = formManager
  return isPending ? (
    <div className="w-screen">
      <LoadingSkeleton message="Unlocking your note..." />
    </div>
  ) : (
    <Card>
      <CardHeader className="mb-5">
        <CardTitle className="text-2xl">
          {formState.success ? "Your Note" : "Unlock Note"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {formState.success ? (
          <Note note={formState.data!.note} />
        ) : (
          <UnlockNoteForm formManager={formManager} />
        )}
      </CardContent>
    </Card>
  )
}
