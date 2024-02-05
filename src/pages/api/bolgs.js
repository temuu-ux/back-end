export default async function handler(request, response) {
  const data = await fetch("https:dev.to/api/articles/150589");
  const blog = await data.json();
  console.log("hi", blog);
  response.setHeader("Access-Control-Allow-Origin", "*");

  response.status(200).json(blog);
}
