
import { cookies } from 'next/headers';
import { comments } from "./data";

export async function GET(req,) {
    const header = req.headers.get("authorization");
    console.log(header);
    const coky = await cookies();
    coky.set('token', 'Bearer 14567');

    return Response.json(comments)
}

export async function POST(request) {
    const comment = await request.json();
    const NewComment = {
        id: comments.length + 1,
        text: comment.text
    }

    comments.push(NewComment);

    return new Response(JSON.stringify(NewComment), {
        status: 200,
        headers: { "Content-Type": "application/json" }

    })

}