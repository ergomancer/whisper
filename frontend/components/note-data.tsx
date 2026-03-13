import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
  CardAction,
} from "./ui/card"
import CopyClipboard from "./copy-clipboard"
import { CreatedNoteData } from "@/lib/types"
import CopyIcon from "./copy-icon"

export default function NoteData({
  createdNote,
}: {
  createdNote: CreatedNoteData
}) {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle className="text-xl">Note Created</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-md text-muted-foreground">
          You can see that note with the following link and password.
        </CardDescription>
        <div className="flex justify-between">
          <span className="mt-5 text-lg">Link</span>
          <CopyIcon
            text={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${createdNote.noteId}`}
          />
        </div>
        <Link
          href={`/${createdNote.noteId}`}
          className="text-md mt-3 text-red-500"
        >
          {`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${createdNote.noteId}`}
        </Link>
        <div className="flex justify-between">
          <span className="mt-5 text-lg">Password</span>
          <CopyIcon text={createdNote.password} />
        </div>
        <p className="text-md mt-3">{createdNote.password}</p>
      </CardContent>
      <CardFooter>
        <CardAction>
          <CopyClipboard
            text={`Hi!\nThere is a secret note for you at ${process.env.NEXT_PUBLIC_FRONTEND_URL}/${createdNote.noteId}\nYou can unlock the message using the password ${createdNote.password}`}
          />
        </CardAction>
      </CardFooter>
    </Card>
  )
}
