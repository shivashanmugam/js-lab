const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

const getLine = (function () {
    const getLineGen = (async function* () {
        for await (const line of rl) {
            yield line;
        }
    })();
    return async () => ((await getLineGen.next()).value);
})();

/* 
sample usage of getline
async function main(){
    const inputText = await getLine();
    console.log(inputText)
}
main() */

module.exports = {
    getLine : getLine
}

