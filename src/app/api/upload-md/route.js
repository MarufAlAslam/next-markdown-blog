import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");
  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const blogsDir = path.join(process.cwd(), "public", "blogs");
  if (!fs.existsSync(blogsDir)) fs.mkdirSync(blogsDir, { recursive: true });
  const filePath = path.join(blogsDir, file.name);
  fs.writeFileSync(filePath, buffer);
  return NextResponse.json({ success: true });
}
