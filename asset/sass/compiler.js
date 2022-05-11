const style = require("sass").compile("asset/sass/style.scss");
const file = require("fs").createWriteStream("./asset/css/style.css")

file.write(style.css)
file.on('finish', () =>{
    console.log("Compilation du fichier sass terminé")
})
file.end()