import block from "./chainModules/block.js";
import chains from "./chainModules/chains.js"
import addBlock from "./chainModules/addBlock.js"
import addHistory from "./chainModules/mockData/addHistory.js";

console.log("beep");

// console.log("block",block);

// let testBlock = new block("inget", 0, "inget");
// console.log(testBlock);

let chain = new chains();
console.log(chain.validateChain());


if (!localStorage.getItem("blockchain")) {
    console.log("No blockchain found");
    //create blockchain
    //let blockchain = new chain();
    //add fake blocks
    fetch("./chainModules/mockData/chainHistory.json")
        .then(result => result.json())
        .then(data => {
            console.log(data.length);
            addHistory(data, chain);
            //localStorage.setItem("blockchain", JSON.stringify(data))
        })
    //add to localStorage
}
else {
    //load blockchain
}