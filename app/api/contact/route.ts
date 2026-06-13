import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
    createdAt: new Date()
  };

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json({ ok: false, message: "Missing required fields." }, { status: 400 });
  }

  if (process.env.MONGODB_URI) {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    await client.db(process.env.MONGODB_DB ?? "dipak_dev").collection("contacts").insertOne(payload);
    await client.close();
  }

  return NextResponse.redirect(new URL("/connect?sent=1", request.url), 303);
}
