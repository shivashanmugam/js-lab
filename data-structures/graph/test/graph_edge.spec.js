var GraphEdge = require('../graph_edge').GraphEdge;
var GraphVertex = require('../graph_vertex').GraphVertex;
var chai = require('../../../libs/chai/chai');
var expect = chai.expect;

describe('GraphEdge()', function () {
    it('should create graph edge with default weight', function () {
        const startVertex = new GraphVertex('A');
        const endVertex = new GraphVertex('B');
        const edge = new GraphEdge(startVertex, endVertex);

        expect(edge.getKey()).to.equal('A_B');
        expect(edge.toString()).to.equal('A_B');
        expect(edge.startVertex).to.equal(startVertex);
        expect(edge.endVertex).to.equal(endVertex);
        expect(edge.weight).to.equal(0);
    })
    it('should create graph edge with predefined weight', () => {
        const startVertex = new GraphVertex('A');
        const endVertex = new GraphVertex('B');
        const edge = new GraphEdge(startVertex, endVertex, 10);
    
        expect(edge.startVertex).to.equal(startVertex);
        expect(edge.endVertex).to.equal(endVertex);
        expect(edge.weight).to.equal(10);
      });

      it('should be possible to do edge reverse', () => {
        const vertexA = new GraphVertex('A');
        const vertexB = new GraphVertex('B');
        const edge = new GraphEdge(vertexA, vertexB, 10);
    
        expect(edge.startVertex).to.equal(vertexA);
        expect(edge.endVertex).to.equal(vertexB);
        expect(edge.weight).to.equal(10);
    
        edge.reverse();
    
        expect(edge.startVertex).to.equal(vertexB);
        expect(edge.endVertex).to.equal(vertexA);
        expect(edge.weight).to.equal(10);
      });
    
})
