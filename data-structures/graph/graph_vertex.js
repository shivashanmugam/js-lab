var LinkedList = require('../linked_list/linked_list').LinkedList;
var GraphEdge = require('./graph_edge').GraphEdge;
exports.GraphVertex = class {
    constructor(value){
        if(value == undefined){
            throw 'value cannot be undefined'
        }
        this.value = value;
        const edge_comparator = function(edge_a, edge_b){
            if(edge_a.getKey() === edge_b.getKey()){
                return 0;
            }
            return edge_a.getKey() > edge_b.getKey() ? 1 : -1;
        }
        this.edges = new LinkedList(edge_comparator)
    }

    getKey(){
        return this.value;
    }

    // this.edges is instance of LinkedList
    addEdge(edge){
        this.edges.append(edge);
        return this;
    }

    deleteEdge(edge){
        this.edges.delete(edge);
    }

    getNeighbors(){
        var edges = this.edges.toArray();
        // In LinkedList a Node instance will store it's value in `value` property
        return edges.map(node => {
            return node.value.startVertex == this ? node.value.endVertex : node.value.startVertex;
        })
    }

    getEdges(){
        // returns all the edgeInstances
        return this.edges.toArray().map(node => node.value);
    }

    getDegree(){
        return this.edges.toArray().length;
    }

    // LinkedList is having a find method
    hasEdge(required_edge){
        var edge = this.edges.find({ 
            callback: function(edge){
                return edge == required_edge
            }
        })  
        return !!edge
    }

    hasNeighbor(vertex){
       return !!this.findEdge(vertex);
    }

    findEdge(vertex){
        var matchedEdge = this.edges.find({
            callback:function(edge){
                return edge.startVertex === vertex || edge.endVertex === vertex; 
            }
        })
        return matchedEdge ? matchedEdge.value : null;
    }

    getKey(){
        return this.value;
    }

    deleteAllEdges(){
        this.edges.toArray().forEach(edge => {
            this.deleteEdge(edge.value);
        })
    }

    toString(callback){
        return callback ? callback(this.value) : `${this.getKey()}`
    }
    
}