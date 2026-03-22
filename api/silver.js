export default async function handler(req, res) {
  try {
    const response = await fetch('https://services.bullionstar.com/spot-chart/getChart?product=false&productId=0&productTo=false&productIdTo=0&fromIndex=XAG&toIndex=SGD&period=MAX&width=600&height=300&timeZoneId=Asia%2FSingapore&weightUnit=kg');
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch silver data' });
  }
}