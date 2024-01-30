import { fetchImagesQuery, fetchImagesByAuthorName, fetchImagesForGallery } from "@/lib/data.service";
import { NextResponse } from "next/server";
import { corsOptions } from "@/lib/corsOptions";

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const author = searchParams.get('author');
    const gallery = searchParams.get('gallery');
    let page = searchParams.get('page');
    const term = searchParams.get('searchterm');
    let query = searchParams.get('query');

    if(author) {

        let result = await fetchImagesByAuthorName(author)
        return NextResponse.json(result, corsOptions('GET'))

    } if(gallery) {

        let result = await fetchImagesForGallery(gallery)
        return NextResponse.json(result, corsOptions('GET'))

    } if(page && !term) {

        let result = await fetchImagesQuery(page, {});
        return NextResponse.json(result, corsOptions('GET'))

    } if(term) {

        page = page === null ? 1 : fetchImagesQuery;
        let result = await fetchImagesQuery(page, {}, term);
        return NextResponse.json(result, corsOptions('GET'))
    }
    else {

        query = query !== null ? JSON.parse(query) : {};
        let result = await fetchImagesQuery(1, query);
        return NextResponse.json(result, corsOptions('GET'))
    }

}
