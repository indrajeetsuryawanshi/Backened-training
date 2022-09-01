let axios = require("axios")



let getvaccinationbydistrict = async function (req, res) {
    try {
        let districtid = req.query.district_id
        let date = req.query.date
        // console.log(`query params are: ${pin} ${date}`)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtid}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getwheatheroflondon = async function (req, res) {
    try {
        let city = req.query.p
        let appkey = req.query.appid

        let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appkey}`)


        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getweatherofcities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let finalinfo = []
        let appkey = req.query.appid
        for (let i = 0; i < cities.length; i++) {
            obj = { city: cities[i] }
            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appkey}`)
            console.log(result)
            obj.temp = result.data.main.temp
            finalinfo.push(obj)
        }
        let sorted = finalinfo.sort(function (a, b) { return a.temp - b.temp })
        res.status(200).send({ msg: sorted })
    }

    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getmames = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        // console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getmemesimage = async function (req, res) {
    let id = req.query.template_id
    let text0 = req.query.text0
    let text1 = req.query.text1
    let username = req.query.username
    let password = req.query.password
    try {
        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options);
        // console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getvaccinationbydistrict = getvaccinationbydistrict
module.exports.getwheatheroflondon = getwheatheroflondon
module.exports.getweatherofcities = getweatherofcities
module.exports.getmames = getmames
module.exports.getmemesimage = getmemesimage