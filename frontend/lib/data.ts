import { ExtendedError } from "@whisper/shared/errors"

export async function summarize(noteId: string) {
  let summary
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL!}/note/${noteId}/summarize`
    )
    const resData = await res.json()
    if (res.ok) {
      summary = resData
    } else throw new ExtendedError(res.status, resData.name, resData.message)
  } catch (err) {
    console.log(err)
    throw err
  }
  return summary
}
