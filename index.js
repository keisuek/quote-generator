async function getQuote() {
	// const proxyUrl = "http://127.0.0.1:5500";
	const apiUrl =
		"http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		console.log(data);
	} catch (e) {
		console.log("whoops, no-quote", e);
	}
}

getQuote();
