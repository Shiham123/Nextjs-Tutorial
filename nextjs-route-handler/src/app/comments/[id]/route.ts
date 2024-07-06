import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );

  if (comment) {
    return new Response(JSON.stringify(comment), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ error: "id not found" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}

// patch request
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { text } = body;

    const index = comments.findIndex(
      (comment) => comment.id === parseInt(params.id)
    );

    if (index !== -1) {
      comments[index].text = text;
      return new Response(JSON.stringify(comments[index]), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ error: "Comment not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// ! delete request
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const commentedId = parseInt(params.id);
    const index = comments.findIndex((comment) => comment.id === commentedId);

    if (!commentedId) {
      return new Response(JSON.stringify({ error: "id not found" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (index === -1) {
      return new Response(JSON.stringify({ error: "comment not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const deletedComment = comments.splice(index, 1)[0];
    return new Response(JSON.stringify({ deleted: deletedComment }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "not hit the delete url" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
