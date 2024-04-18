/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { distance, unit } = await request.json();

  return new Response(JSON.stringify(`distance is ${distance}, unit is ${unit}`));
}
