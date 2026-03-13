import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "./ui/button"
import { CheckmarkSquare01Icon, Copy01Icon } from "@hugeicons/core-free-icons"
import { copyToClipboard } from "@/lib/utils"
import { useState } from "react"
import { Spinner } from "./ui/spinner"

export default function CopyIcon({ text }: { text: string }) {
  const initialState = "ready"
  const [state, setState] = useState(initialState)
  return (
    <Button
      variant={"ghost"}
      size="icon"
      onClick={async () => {
        setState("copying")
        await copyToClipboard(text)
        setState("copied")
      }}
    >
      {state == "copied" ? (
        <HugeiconsIcon icon={CheckmarkSquare01Icon} />
      ) : state == "copying" ? (
        <Spinner />
      ) : (
        <HugeiconsIcon icon={Copy01Icon} />
      )}
    </Button>
  )
}
