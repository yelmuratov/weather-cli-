const {getArgs} = require("./helpers/args");

const Start = () =>{
    const args = getArgs(process.argv)

    console.log(args);
}

Start();