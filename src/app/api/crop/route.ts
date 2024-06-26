import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import axios from "axios";

export async function GET(req: NextRequest) {
  const requestParams = req.nextUrl.searchParams.entries();

  const requestMapped = Object.fromEntries(requestParams);

  if (
    !requestMapped.imageUrl ||
    !requestMapped.x ||
    !requestMapped.y ||
    !requestMapped.width ||
    !requestMapped.height
  ) {
    return new Response("Missing required query parameters", { status: 400 });
  }

  try {
    const response = await axios.get(requestMapped.imageUrl as string, {
      responseType: "arraybuffer",
    });
    const imageBuffer = Buffer.from(response.data, "binary");

    const croppedImage = await sharp(imageBuffer)
      .extract({
        left: parseInt(requestMapped.x as string),
        top: parseInt(requestMapped.y as string),
        width: parseInt(requestMapped.width as string),
        height: parseInt(requestMapped.height as string),
      })
      .toFormat("webp")
      .toBuffer();

    return new Response(croppedImage, {
      headers: { "Content-Type": "image/webp" },
    });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
