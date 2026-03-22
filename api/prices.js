export default async function handler(req, res) {
  try {
    const response = await fetch('https://services.bullionstar.com/spot-chart/graph/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}