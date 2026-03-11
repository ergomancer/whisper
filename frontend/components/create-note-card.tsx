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
    <div className="flex h-full w-full items-center justify-center">
      <Card className="flex flex-col gap-0 border p-0 lg:flex-row">
        <div className="border-r p-5">
          <CardHeader className="mb-5">
            <CardTitle className="text-2xl">Create Note</CardTitle>
          </CardHeader>
          <CardContent>
            <CreateNoteForm action={createNoteAction} />
          </CardContent>
        </div>
        <div className="m-auto p-5">
          <CardDescription>
            {cardState.success ? (
              <NoteData createdNote={cardState.data!} />
            ) : (
              <ol className="flex flex-col gap-5 text-lg text-red-500">
                <li key="1">Create a note</li>
                <li key="2">Get the link and password</li>
                <li key="3">Share it</li>
              </ol>
            )}
          </CardDescription>
        </div>
      </Card>
    </div>
  )
}
