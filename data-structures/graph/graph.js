exports.Graph = class {
    constructor(isDirected = false) {
        this.vertices = {};
        this.edges = {};
        this.isDirected = isDirected;
    }

    addVertex(newVertex) {
        this.vertices[newVertex.getKey()] = newVertex;
        return this;
    }

    getVertexByKey(key) {
        return this.vertices[key];
    }

    getNeighbors(vertex) {
        return vertex.getNeighbors();
    }

    getAllVertices() {
        return Object.values(this.vertices);
    }

    getAllEdges() {
        return Object.values(this.edges);
    }

    addEdge(newEdge) {
        // check newEdge is already there

        var startVertex = this.vertices[newEdge.startVertex.getKey()];
        var endVertex = this.vertices[newEdge.endVertex.getKey()];

        // if vertext is not present in the vertices
        if (!startVertex) {
            this.addVertex(newEdge.startVertex);
            startVertex = this.vertices[newEdge.startVertex.getKey()];
        }
        if (!endVertex) {
            this.addVertex(newEdge.endVertex);
            endVertex = this.vertices[newEdge.endVertex.getKey()];
        }

        if (this.edges[newEdge.getKey()]) {
            console.log('HSDFSDF')
            throw new Error('Already Edge added')
        } else {
            this.edges[newEdge.getKey()] = newEdge;
        }

        // Add edge to the vertices.
        if (this.isDirected) {
            newEdge.startVertex.addEdge(newEdge);
        } else {
            // if bi-directed need to add the edge to both the vertex
            newEdge.startVertex.addEdge(newEdge);
            newEdge.endVertex.addEdge(newEdge);
        }
        return this;
    }

    deleteEdge(edgeToDelete) {
        if (this.edges[edgeToDelete.getKey()]) {
            delete this.edges[edgeToDelete.getKey()]
        } else {
            throw new Error('Edge not found to delete');
        }

        const startVertex = this.getVertexByKey(edgeToDelete.startVertex.getKey());
        const endVertex = this.getVertexByKey(edgeToDelete.startVertex.getKey());

        startVertex.deleteEdge(edgeToDelete);
        endVertex.deleteEdge(edgeToDelete);
    }

    findEdge(startVertex, endVertex) {
        var vertex = this.getVertexByKey(startVertex.getKey());
        if (!vertex) {
            return null;
        }
        return vertex.findEdge(endVertex);
    }

    /**
     * @return {Graph}  
     * 
     */
    reverse() {
        this.getAllEdges().forEach(edge => {
            this.deleteEdge(edge);
            edge.reverse();
            this.addEdge(edge)
        });
        return this;
    }

    /**
    * @return {Object}  
    * 
    */
    getVerticesIndices() {
        var allVerticexIndices = {};
        this.getAllVertices().forEach((vertex, index) => {
            allVerticexIndices[vertex.getKey()] = index;
        })
        return allVerticexIndices;
    }

    /**
     * @return {Array}  
     * 
     */
    getAdjacencyMatrix() {
        var vertices = this.getAllVertices();
        var edges = this.getAllEdges();
        var verticesIndices = this.getVerticesIndices();
        var adjacencyMatrix = Array(vertices.length).fill(null).map(() => {
            return Array(vertices.length).fill(Infinity);
        })

        vertices.forEach((vertex, index) => {
            vertex.getNeighbors().forEach((neibour, index) => {
                adjacencyMatrix[verticesIndices[vertex.getKey()]][verticesIndices[neibour.getKey()]] = this.findEdge(vertex, neibour).weight;
            })
        })
        return adjacencyMatrix;
    }

    toString() {
        return Object.keys(this.vertices).toString();
    }

    getWeight() {
        return this.getAllEdges().reduce((aggregate, edge) => {
            return aggregate + edge.weight;
        }, 0)
    }
}
