const url = 'https://spotify23.p.rapidapi.com/search/?q=classical&type=artists&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e2e9ee62c7mshefec2c26d6c1fb9p14f81djsn0b6e51a2cecb',
		'x-rapidapi-host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}