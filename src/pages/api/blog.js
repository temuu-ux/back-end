export default async function handler(request, response) {
  const res = await fetch("https://dev.to/api/articles?per_page=15&top=5");
  const blog = await res.json();

  response.setHeader("Access-Controll-Allow-Origin", "*");
  response.status(200).json(blog);
}
