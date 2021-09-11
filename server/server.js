require('dotenv').config()
const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const cors = require('cors')
const bodyParser = require('body-parser')
// const lyricsFinder = require("lyricsFinder")

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.post('/refresh', (req,res) => {
    const refreshToken = req.body.refreshToken
    console.log("hi")
    const spotifyApi = new SpotifyWebApi({
        redirectUri:process.env.REDIRECT_URI,
        clientId:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,

        // redirectUri:'http://localhost:3000',
        // clientId:'409aed3e42034bf894d4aa4b1d04332c',
        // clientSecret:'057be3a52c7e4fe8951848b0676ba9f3',
        refreshToken,
    })

    spotifyApi
    .refreshAccessToken()
    .then(data => {
        res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn,
        })
    })
    .catch(err => {
        console.log(err)
        res.sendStatus(400)
    })
})

app.post('/login',(req,res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri:process.env.REDIRECT_URI,
        clientId:process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
    })

    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    }).catch(err => {
        console.log(err)
        res.sendStatus(400)
    })
})

// app.get('/lyrics', async (req,res)=>{
//    const lyrics = (await lyricsFinder(req.query.artist, req.query.track)) || 
//    "No Lyrics Found"
//    res.json({lyrics})
// })

app.listen(3001)