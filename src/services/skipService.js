export async function getSkipsByLocation(postcode, area) {
  const response = await fetch(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`);
  const data = await response.json();
  return data;
}