import { comments } from "../data";
import { headers } from "next/headers";


export async function PATCH(req, { params }) {
    const HeaderList = await headers();
    console.log(HeaderList.get("Authorization"))
    const body = await req.json();
    const Id = await params
    if (!body.text) {
        throw new Error('Missing Txt field in request body ')
    }


    const ParticularComment = comments.find((comment) =>
        comment.id === parseInt(Id.id)
    )
    console.log(comments)

    if (!ParticularComment) {
        return new Response(JSON.stringify({ error: "not-found" }),
            {
                status: 404,
                header: { "Content-Type": "application/json" }
            })
    }

    ParticularComment.text = body.text;


    return new Response(JSON.stringify(ParticularComment),
        {
            status: 201,
            headers: { 'Content-Type': "application/json" }
        })


};



export async function DELETE(req, { params }) {
    const actualId = await params
    const ID = actualId.id
    console.log(ID);
    const Updated = comments.filter((comment) => comment.id !== parseInt(ID))
    return new Response(JSON.stringify(Updated), {
        status: 200,
        headers: { 'Content-Type': "application/json" }
    })
}