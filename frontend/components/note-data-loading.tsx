import { Button } from "./ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Skeleton } from "./ui/skeleton"

export default function NoteDataLoading() {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardTitle className="text-xl">Creating Note</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-md text-muted-foreground">
          You can see that note with the following link and password.
        </CardDescription>
        <p className="mt-5 text-lg">Link</p>
        <Skeleton className="h-md w-50" />
        <p className="mt-5 text-lg">Password</p>
        <Skeleton className="h-md w-50" />
      </CardContent>
      <CardFooter>
        <CardAction>
          <Button>Copy to Clipboard</Button>
        </CardAction>
      </CardFooter>
    </Card>
  )
}
