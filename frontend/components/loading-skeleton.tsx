import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

export default function LoadingSkeleton(
  { message }: { message: string } = { message: "" }
) {
  return (
    <Card>
      {message && (
        <CardHeader>
          <CardTitle className="text-xl">{message}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <Skeleton className="h-50 w-[90%]" />
      </CardContent>
    </Card>
  )
}
