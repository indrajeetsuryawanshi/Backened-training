
const d = new Date();
    const getdate=function (){
console.log (d)
    }
    const month = d.toLocaleString('default', { month: 'long' })

    const newmonth= function(){
        console.log(month)
    }
const getbatchinfo= function(){
     console.log("plutonium, W3D5, the topic for today is Nodejs module system")
}
   
module.exports.date = getdate
module.exports.month= newmonth
module.exports.info = getbatchinfo