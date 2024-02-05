export default async function handler(request, response) {
  const res = await fetch("https://dev.to/api/articles?per_page=4&top=3");
  const card = await res.json();

  console.log("yov", card);

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json(card);
}
