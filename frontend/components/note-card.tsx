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
    <div className="w-[90%]">
      <LoadingSkeleton message="Unlocking your note..." />
    </div>
  ) : (
    <Card className="w-[90%]">
      <CardHeader className="mb-5">
        <CardTitle className="text-2xl">
          {formState.success ? "Your Note" : "Unlock Note"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {formState.success ? (
          <Note note={formState.data!.note} />
        ) : (
          <div className="m-auto max-w-200">
            <UnlockNoteForm formManager={formManager} />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
