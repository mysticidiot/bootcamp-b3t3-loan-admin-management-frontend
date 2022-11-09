var apiEndpoints = require("../lib/url-endpoints");

export async function DisplayItemAPI() {
  const response = await fetch(apiEndpoints.DISPLAY_ITEM_API, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}

export async function DeleteItemAPI(id) {
  const response = await fetch(apiEndpoints.DELETE_ITEM_API + "/" + id, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}
