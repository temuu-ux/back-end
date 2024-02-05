export default async function handler(request, response) {
  const res = await fetch("https://dev.to/api/articles?per_page=15&top=5");
  const blogjump = await res.json();

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json(blogjump);
}
