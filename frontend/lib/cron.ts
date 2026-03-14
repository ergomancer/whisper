export async function expiryCleanup() {
  await fetch(`${process.env.BACKEND_URL}/expiryCleanup`)
}
