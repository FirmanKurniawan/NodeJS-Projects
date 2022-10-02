const express = require('express')
const gplay = require('google-play-scraper')
const app = express()

/*
| ------------------------------------------------------
| e.g http://localhost:3000?id=com.alibaba.aliexpresshd
|
| return json
| {
|	"title": "AliExpress",
|	"version": "8.55.1"
| }
| ------------------------------------------------------
*/
https: app.get('/', async (req, res) => {
	const { id } = req.query
	if (!id) return res.status(400).send('No id provided')

	try {
		const { title, version } = await gplay.app({ appId: id })

		res.send({ title, version })
	} catch (err) {
		res.status(500).send(err.message)
	}
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
