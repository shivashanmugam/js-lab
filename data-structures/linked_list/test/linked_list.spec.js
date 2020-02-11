var LinkedList = require('../linked_list').LinkedList;
var chai = require('../../../libs/chai/chai');
var expect = chai.expect;

describe('LinkedList', () => {
    it('should create empty linked list', () => {
      const linkedList = new LinkedList();
      expect(linkedList.toString()).to.equal('');
    });

    it('should append node to linked list', () => {
        const linkedList = new LinkedList();
    
        expect(linkedList.head).to.be.null;
    
        linkedList.append(1);
        linkedList.append(2);
        expect(linkedList.toString()).to.equal('1,2');
        expect(linkedList.tail.next).to.be.null;
      });

      it('should prepend node to linked list', () => {
        const linkedList = new LinkedList();
    
        linkedList.prepend(2);
        expect(linkedList.head.toString()).to.equal('2');
        expect(linkedList.tail.toString()).to.equal('2');
    
        linkedList.append(1);
        linkedList.prepend(3);
    
        expect(linkedList.toString()).to.equal('3,2,1');
      });

      it('should delete node by value from linked list', () => {
        const linkedList = new LinkedList();
    
        expect(linkedList.delete(5)).to.be.null;
    
        linkedList.append(1);
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(3);
        linkedList.append(4);
        linkedList.append(5);
    
        expect(linkedList.head.toString()).to.equal('1');
        expect(linkedList.tail.toString()).to.equal('5');
    
        const deletedNode = linkedList.delete(3);
        expect(deletedNode.value).to.equal(3);
        expect(linkedList.toString()).to.equal('1,1,2,4,5');
    
        linkedList.delete(3);
        expect(linkedList.toString()).to.equal('1,1,2,4,5');
    
        linkedList.delete(1);
        expect(linkedList.toString()).to.equal('2,4,5');
    
        expect(linkedList.head.toString()).to.equal('2');
        expect(linkedList.tail.toString()).to.equal('5');
    
        linkedList.delete(5);
        expect(linkedList.toString()).to.equal('2,4');
    
        expect(linkedList.head.toString()).to.equal('2');
        expect(linkedList.tail.toString()).to.equal('4');
    
        linkedList.delete(4);
        expect(linkedList.toString()).to.equal('2');
    
        expect(linkedList.head.toString()).to.equal('2');
        expect(linkedList.tail.toString()).to.equal('2');
    
        linkedList.delete(2);
        expect(linkedList.toString()).to.equal('');
      });
    
    
});