const input = '12*';
const stack = [];

const isCharNum = function(char){
    return (isNaN(Number(char)) == false)
}

const doOperation = function(operator, operand1, operand2){
    if(operator == '+'){
        return operand1 + operand2;
    } else if(operator == '-'){
        return operand1 - operand2;
    } else if(operator == '*'){
        return operand1 * operand2;
    } else if(operator == '/'){
        return operand1 / operand2;
    }
}

for(let i = 0;i < input.length;i++){
    const curChar = input[i];
    if(isCharNum(curChar)){
        stack.push(Number(curChar))
    } else {
        const operator = curChar;
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const result = doOperation(operator, operand1, operand2);
        stack.push(result);
    }
}

const result = stack.pop();
if(result == -0){
    return Math.abs(result)
}else {
    return result;
}