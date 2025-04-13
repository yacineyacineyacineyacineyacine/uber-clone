import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  const sql = neon(`${process.env.DATABASE_URL}`);

  const { name, email, clerkId } = await request.json();

  if (!name || !email || clerkId) {
    return Response.json({ error: "Missing required filed" });
  }
}

const response = await sql(`
      INSERT INTO users (
        name,
        email,
        clerk_id
      ) 
      VALUES (
        ${name},
        ${email},
        ${clerkId}
        )
    `);

// See https://neon.tech/docs/serverless/serverless-driver
// for more information
