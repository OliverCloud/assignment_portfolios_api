import { fetchGalleries, fetchGalleryById, fetchGalleryByName } from "@/lib/data.service"
import { NextResponse } from "next/server"
import { corsOptions } from "@/lib/corsOptions";

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const name = searchParams.get('name');

    console.log('name', name, id);
    

    if(name && id === null) {
        let result = await fetchGalleryByName(name)
        return NextResponse.json(result, corsOptions('GET'))

    } else {

        let result = await fetchGalleryById(id)
        return NextResponse.json(result, corsOptions('GET'))
    }

}
