const { JSDOM } = require("jsdom");

const dom= new JSDOM(`<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="./styles.css">
        <title>Macarena</title>
        <style>
            img{
                padding: 20px;
            }
        </style>
        <script src="./index.js" defer></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
    <div class="p">
                <div class="c"></div>
                <div class="d"></div>
            </div>
    </body>
</html>`)



const obj={
    a: 1,
    b:2,
    c:3,
    d:4
}

const result=Object.keys(obj).filter(
    (key)=>{
        return key==='a'|| key==='b';
    }
)

console.log(result);

console.table(document.body)