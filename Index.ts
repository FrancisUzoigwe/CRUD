// Reading a file 
import fs from "fs"
import path from "path"
const varName = fs.readFileSync(path.join(__dirname, "Index.ts"))
console.log(varName.toString());


// Writing a file 

fs.writeFile(path.join(__dirname, "CRUD", "Index.ts"), "This is the best day ever!",

(err) => {
    if(err){
        throw err;

    }else{
        console.log("I amm done with this file")
    }

})




const readWrite = (dataFile: string , ext : string) => {
    fs.writeFile(path.join(__dirname, "src", ext), dataFile, (err) => {
        if (err) {
            throw err;

        }else{
            console.log("File Created");
            console.log("");
            fs.readFile(path.join(__dirname, "src", ext), "utf-8",  (err, data) => {
                if (err) {
                    throw err;

                }else{
                    console.log(data)
                }
            })
        }
    })
};

readWrite("const App() => {return()}export default App", "Francis.tsx")

const newPath = path.join(__dirname, "CRUD", "Index.txt")

fs.appendFile(newPath, "Where you would want to be",(err) => {
    if (err) {
        throw err;

    }else{
        console.log('Done')
    }
})


fs.unlink(newPath, (err) => {
    if (err) {
        throw err;

    }else{
        console.log('Done')
    }
})





