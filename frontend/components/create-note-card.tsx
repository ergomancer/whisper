"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useActionState } from "react"
import CreateNoteForm from "@/components/create-note-form"
import { createNote } from "@/lib/actions"
import NoteData from "./note-data"
import type { CreateNoteCardState } from "@whisper/shared/types"

export default function CreateNoteCard() {
  const initialState: CreateNoteCardState = { success: false }
  const [cardState, createNoteAction] = useActionState<
    CreateNoteCardState,
    FormData
  >(createNote, initialState)

  return (
    <Card className="flex flex-row">
      <div className="border-r">
        <CardHeader>
          <CardTitle>Create Note</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateNoteForm action={createNoteAction} />
        </CardContent>
      </div>
      <div className="border-l">
        <CardDescription>
          {cardState.success ? (
            <NoteData createdNote={cardState.data!} />
          ) : (
            <ul>
              <li key="1">Create a note</li>
              <li key="2">Get the link and password</li>
              <li key="3">Share it</li>
            </ul>
          )}
        </CardDescription>
      </div>
    </Card>
  )
}
