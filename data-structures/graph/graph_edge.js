exports.GraphEdge = class{
    constructor(startVertex, endVertex, weight = 0){
        this.startVertex = startVertex;
        this.endVertex = endVertex;
        this.weight = weight;
    }

    getKey(){
        return `${this.startVertex.getKey()}_${this.endVertex.getKey()}`;
    }

    reverse(){
        this.startVertex = [this.endVertex, this.endVertex = this.startVertex][0];
    }

    toString(){
        return this.getKey();
    }
}