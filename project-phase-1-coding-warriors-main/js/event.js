const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/artist/bio?artist_id=99';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '77c486e53amsh3557e13ad503ef7p11c85ajsnedf70ea59f0e',
		'x-rapidapi-host': 'concerts-artists-events-tracker.p.rapidapi.com'
	}
};

// try {
	const response = await fetch(url, options);
	const result = await response.text();
    console.log("hii");
    
	console.log(result);
// } catch (error) {
	// console.error(error);
// }