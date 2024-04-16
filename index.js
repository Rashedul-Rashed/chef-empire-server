const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

const allChef = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
	res.send('Server is Running');
});

app.get('/allChef', (req, res) => {
	res.send(allChef);
});

app.get('/allChef/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const singleChef = allChef.find((chef) => parseInt(chef.id) === id);
	res.send(singleChef);
});

app.listen(port, () => {
	console.log(`Server is running on port : ${port}`);
});
