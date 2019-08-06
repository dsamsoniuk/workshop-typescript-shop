export async function makeRequest(url) {
    const response = await fetch(url);
    return response.json();
}

export async function makeJSONRequest(url) {
    return makeRequest(url);
}