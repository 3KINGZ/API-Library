const URL = "https://api.publicapis.org/entries";

export async function getAPIs() {
  let response = await fetch(URL);
  let data = await response.json();
  return data;
}
