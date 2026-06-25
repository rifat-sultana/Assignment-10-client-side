import { getAuth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export async function POST(request) {
  const handlers = toNextJsHandler(getAuth());
  return handlers.POST(request);
}

export async function GET(request) {
  const handlers = toNextJsHandler(getAuth());
  return handlers.GET(request);
}
