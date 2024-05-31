import { NextRequest } from "next/server";

import chowdown from "chowdown";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get("url");
  if (!url) return new Response("no url provided", { status: 400 });

  const result = await fetch(url);
  const text = await result.text();

  const scope = chowdown.body(text);
  const query = chowdown.query.string(".main-content");
  const raw = await scope.execute(query);

  const blob = getRtfBlobForText(raw);
  return new Response(blob);
}

function getRtfBlobForText(text: string) {
  return new Blob([text], { type: "application/rtf" });
}
