import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card"

export default function NoteData({
  createdNote,
}: {
  createdNote: { noteId: string; password: string }
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Note Created</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          You can see that note with the following link and password.
        </CardDescription>
        <p>Link</p>
        <Link href={`/${createdNote.noteId}`}>
          {`${process.env.NEXT_PUBLIC_FRONTEND_URL}/${createdNote.noteId}`}
        </Link>
        <p>Password</p>
        <p>{createdNote.password}</p>
      </CardContent>
    </Card>
  )
}
