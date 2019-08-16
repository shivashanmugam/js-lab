var GraphVertex = require('../graph_vertex').GraphVertex;
var GraphEdge = require('../graph_edge').GraphEdge;
var chai = require('../../../libs/chai/chai');
var expect = chai.expect;

describe('GraphVertex()', function () {
    it('should throw an error when trying to create vertex without value', () => {
        let vertex = null;

        function createEmptyVertex() {
            vertex = new GraphVertex();
        }

        expect(vertex).to.be.null;
        expect(createEmptyVertex).to.throw();
    });
    it('should create graph vertex', () => {
        const vertex = new GraphVertex('A');

        expect(vertex).not.to.be.undefined;
        expect(vertex.value).to.equal('A');
        expect(vertex.toString()).to.equal('A');
        expect(vertex.getKey()).to.equal('A');
        expect(vertex.edges.toString()).to.equal('');
        expect(vertex.getEdges()).eql([]);
    });

    it('should add edges to vertext and check if it exits', function () {
        const vertexA = new GraphVertex('A');
        const vertexB = new GraphVertex('B');

        const edgeA_B = new GraphEdge(vertexA, vertexB)
        vertexA.addEdge(edgeA_B);

        expect(vertexA.hasEdge(edgeA_B)).to.be.true;
        expect(vertexB.hasEdge(edgeA_B)).to.be.false;
        expect(vertexA.getEdges().length).to.equal(1);
        expect(vertexA.getEdges()[0].toString()).to.equal('A_B');
    })

    it('should delete edges from vertex', function () {
        const vertexA = new GraphVertex('A');
        const vertexB = new GraphVertex('B');
        const vertexC = new GraphVertex('C');
        const edgeAB = new GraphEdge(vertexA, vertexB);
        const edgeAC = new GraphEdge(vertexA, vertexC);
        vertexA.addEdge(edgeAB).addEdge(edgeAC);

        expect(vertexA.hasEdge(edgeAB)).to.be.true;
        expect(vertexB.hasEdge(edgeAB)).to.be.false;

        expect(vertexA.hasEdge(edgeAC)).to.be.true;
        expect(vertexC.hasEdge(edgeAC)).to.be.false;

        expect(vertexA.getEdges().length).to.equal(2);

        expect(vertexA.getEdges()[0].toString()).to.equal('A_B');
        expect(vertexA.getEdges()[1].toString()).to.equal('A_C');

        vertexA.deleteEdge(edgeAB);
        expect(vertexA.hasEdge(edgeAB)).to.be.false;
        expect(vertexA.hasEdge(edgeAC)).to.be.true;
        expect(vertexA.getEdges()[0].toString()).to.equal('A_C');

        vertexA.deleteEdge(edgeAC);
        expect(vertexA.hasEdge(edgeAC)).to.be.false;
        expect(vertexA.getEdges().length).to.equal(0);
    })

    it('should delete all edges from vertex', () => {
        const vertexA = new GraphVertex('A');
        const vertexB = new GraphVertex('B');
        const vertexC = new GraphVertex('C');

        const edgeAB = new GraphEdge(vertexA, vertexB);
        const edgeAC = new GraphEdge(vertexA, vertexC);
        vertexA
            .addEdge(edgeAB)
            .addEdge(edgeAC);

        expect(vertexA.hasEdge(edgeAB)).to.be.true;
        expect(vertexB.hasEdge(edgeAB)).to.be.false;

        expect(vertexA.hasEdge(edgeAC)).to.be.true;
        expect(vertexC.hasEdge(edgeAC)).to.be.false;

        expect(vertexA.getEdges().length).to.equal(2);

        vertexA.deleteAllEdges();

        expect(vertexA.hasEdge(edgeAB)).to.be.false;
        expect(vertexB.hasEdge(edgeAB)).to.be.false;

        expect(vertexA.hasEdge(edgeAC)).to.be.false;
        expect(vertexC.hasEdge(edgeAC)).to.be.false;

        expect(vertexA.getEdges().length).to.equal(0);
    });

    it('should return vertex neighbors in case if current node is end one', () => {
        const vertexA = new GraphVertex('A');
        const vertexB = new GraphVertex('B');
        const vertexC = new GraphVertex('C');

        const edgeBA = new GraphEdge(vertexB, vertexA);
        const edgeCA = new GraphEdge(vertexC, vertexA);
        vertexA
            .addEdge(edgeBA)
            .addEdge(edgeCA);

        expect(vertexB.getNeighbors()).eql([]);

        const neighbors = vertexA.getNeighbors();

        expect(neighbors.length).to.equal(2);
        expect(neighbors[0]).to.equal(vertexB);
        expect(neighbors[1]).to.equal(vertexC);
    });

    it('should check if vertex has specific neighbor', () => {
        const vertexA = new GraphVertex('A');
        const vertexB = new GraphVertex('B');
        const vertexC = new GraphVertex('C');

        const edgeAB = new GraphEdge(vertexA, vertexB);
        vertexA.addEdge(edgeAB);

        expect(vertexA.hasNeighbor(vertexB)).to.equal(true);
        expect(vertexA.hasNeighbor(vertexC)).to.equal(false);
    });

    it('should edge by vertex', () => {
        const vertexA = new GraphVertex('A');
        const vertexB = new GraphVertex('B');
        const vertexC = new GraphVertex('C');

        const edgeAB = new GraphEdge(vertexA, vertexB);
        vertexA.addEdge(edgeAB);
        expect(vertexA.findEdge(vertexB)).to.equal(edgeAB);
        expect(vertexA.findEdge(vertexC)).to.be.null;
    });

    it('should calculate vertex degree', () => {
        const vertexA = new GraphVertex('A');
        const vertexB = new GraphVertex('B');

        expect(vertexA.getDegree()).to.equal(0);

        const edgeAB = new GraphEdge(vertexA, vertexB);
        vertexA.addEdge(edgeAB);

        expect(vertexA.getDegree()).to.equal(1);

        const edgeBA = new GraphEdge(vertexB, vertexA);
        vertexA.addEdge(edgeBA);

        expect(vertexA.getDegree()).to.equal(2);

        vertexA.addEdge(edgeAB);
        expect(vertexA.getDegree()).to.equal(3);

        expect(vertexA.getEdges().length).to.equal(3);
    });

})