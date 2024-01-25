module.exports = (app) => {

    //displayName
    

    //receipt
    app.get('/fortnite/api/receipts/v1/account/:accountId/receipts', (req, res) => {
		res.json([])
	});
    
    //Platform
    app.post('/fortnite/api/game/v2/tryPlayOnPlatform/account/:accountId', (req, res) => {
		res.set('Content-Type', 'text/plain');
		res.send(true);
	});


    //stats
    app.get('*/api/statsv2/account/:accountId', (req, res) => {
		res.json({
			"startTime": 0,
			"endTime": 0,
			"stats": {},
			"accountId": req.params.accountId
		})
	})

	//stats for chapter 1
	app.get('/fortnite/api/stats/accountId/:accountId/bulk/window/alltime', (req, res) => {
		res.json([])
	})

    //change the 0 to what ever amount of gold you want
	app.get('/fortnite/api/game/v2/br-inventory/account/:accountId', (req, res) => {
		res.json({
			"stash": {
				"globalcash": 69 //a little bit of trolling
			},
		})
	});
}
