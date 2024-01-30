import { fetchGalleries } from "@/lib/data.service"
import { NextResponse } from "next/server"
import { corsOptions } from "@/lib/corsOptions";

export async function GET(request) {

    let galleries = await fetchGalleries()

    return NextResponse.json(galleries, corsOptions('GET'))

}
