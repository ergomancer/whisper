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
        <p>{createdNote.noteId}</p>
        <p>Password</p>
        <p>{createdNote.password}</p>
      </CardContent>
    </Card>
  )
}
