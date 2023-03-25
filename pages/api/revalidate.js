export default async function handler(req, res) {
  try {
    const { path } = JSON.parse(req.body);
    if (!path) {
      return res.status(400).json({ message: "Path is required" });
    }
    await res.revalidate(path);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
