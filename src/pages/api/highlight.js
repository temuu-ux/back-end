export default async function handler(request, response) {
  const data = await fetch("https://dev.to/api/articles?per_page=1&top=1");
  const highight = await data.json();
  console.log("hi", highight);
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.status(200).json(highight);
}
