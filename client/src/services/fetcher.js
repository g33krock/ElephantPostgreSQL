export function fetcher(url, options = {}) {
	options.headers = {
		"Content-Type": "application/json",
		"Authorization": `Bearer ${JSON.parse(localStorage["supabase.auth.token"]).currentSession.access_token}`
	};
	return fetch(url, options);
}