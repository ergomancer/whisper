# Whisper

A secret note sharing app. Built using Next.js, Express, Prisma, PostgreSQL and powered by Gemini.

## Setup Instructions

1. Clone this [repository](https://github.com/ergomancer/whisper)
   `gh repo clone ergomancer/whisper`
   or
   `git clone https://github.com/ergomancer/whisper.git`
2. Navigate into the repository
   `cd whisper`
3. Install packages
   `npm install`
4. Create a database (referred to as `DB: whisper` in this document)
5. Add environment variables in `.env` files as follows
   1. in `/backend`
      1. `PORT` - port for the backend to listen to
      2. `APP_URL` - base URL for the frontend where this app is to be deployed (for local it will be `"http://localhost:3000"`)
      3. `DATABASE_URL` - url for `DB: whisper`
      4. `GEMINI_API_KEY` - your gemini api key
   2. in `/frontend`
      1. `BACKEND_URL` - url for the backend where this is deployed (for local it will be `"https://localhost:<PORT>"` : replace `<PORT>` with the value of the `PORT` in `.env` in `/frontend`)
      2. `NEXT_PUBLIC_FRONTEND_URL` - url for the frontend. Same as `APP_URL` in `.env` in `/frontend`
6. Set-up your database

   ```bash
   cd /backend
   npx prisma migrate dev
   ```

7. Run backend dev server
   `npm run dev`
8. Run frontend dev server
   `npm run dev`
9. Visit the frontend on any browser

## Potential Future Improvements

- Notes with lifespan
- Summary storage and retrieval
- Reply feature
  - AI generated reply
