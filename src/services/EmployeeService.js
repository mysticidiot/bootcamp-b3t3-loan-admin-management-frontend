var apiEndpoints = require("../lib/url-endpoints");

export async function DisplayEmployeeAPI() {
  const response = await fetch(apiEndpoints.DISPLAY_EMPLOYEE_API, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}

export async function DeleteEmployeeAPI(id) {
  const response = await fetch(apiEndpoints.DELETE_EMPLOYEE_API + "/" + id, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}
