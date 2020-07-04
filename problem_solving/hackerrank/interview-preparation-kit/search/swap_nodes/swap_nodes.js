var getLine = require('../../../../../utils/input/input').getLine;

class Tree {
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }

    inorderprint(){
        if(this.left){
            this.left.inorderprint()
        }
        process.stdout.write(`${this.value} `);
        if(this.right){
            this.right.inorderprint()
        }
    }

    swapByLevelTree(currentLevel, targetLevel){
        if(currentLevel % targetLevel == 0){
            // console.log(`${currentLevel} - ${targetLevel}`)
            // console.log(this)
            let temp = this.left;
            this.left = this.right;
            this.right = temp;
        }
            if(this.left){
                this.left.swapByLevelTree(currentLevel+1, targetLevel)
            }
            if(this.right){
                this.right.swapByLevelTree(currentLevel+1, targetLevel)
            }
    }
}


async function main(){
    let testCases = await getLine();
    let tree = new Tree(1);
    let childrens = []
    let operationCount;
    let operations = [];
    for(var i = 0; i < testCases;i++){
        let leftAndRight = await getLine();
        let lRArray = leftAndRight.split(' ').map((str) => Number.parseInt(str));
        childrens.push({'left':lRArray[0], 'right':lRArray[1]});
    }

    operationCount = await getLine();operationCount = Number.parseInt(operationCount);
    for(var i =0; i< operationCount;i++){
        let op = await getLine();
        operations.push(Number.parseInt(op))
    }

    //GETTNIG INPUT OVER, STARTING CREATING TREE STRUCTURE AND PERFORMING SWAP OPERATIONS AT LEVELS
    
    let nodesForInsertion = [tree]
    let nextNodesOfIteration = []
    for(var i = 0; i < testCases;){
        nodesForInsertion.forEach(node => {
            let child = childrens[i]
            if(child.left != -1){
                node.left = new Tree(child.left)
                nextNodesOfIteration.push(node.left)
            }
            if(child.right != -1){
                node.right = new Tree(child.right)
                nextNodesOfIteration.push(node.right)
            }
            i++;
        })
        nodesForInsertion = nextNodesOfIteration;
        nextNodesOfIteration = []
    }
    operations.forEach(op => {
        tree.swapByLevelTree(1, op)
        tree.inorderprint();
        console.log()
    })
    process.exit();
}

main()
