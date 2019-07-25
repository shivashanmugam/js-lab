var Tree = require('../binary_tree.js').Tree;
var chai = require('../../../libs/chai/chai');
var assert = chai.assert;
var expect = chai.expect;

describe('Binary Tree', function () {
    it('Create a tree instance', function () {
        var my_tree = new Tree([]);
        assert.equal(true, 'root' in my_tree)
        assert.equal(true, 'depth' in my_tree)
    })

    it('Create a tree instance with values', function () {
        var my_tree = new Tree([5, 3, 24, 4, 7, 6, 8, 1, 12]);
        assert.equal(my_tree.root.value, 5)
        assert.equal(my_tree.root.left.left.value, 1)
        my_tree.traverse();
        assert.equal(my_tree.depth, 5);
    })
})

describe('Binary Tree Verifies Insertion', function () {
    it('Adding new values to existing tree', function () {
        var my_tree = new Tree([5, 3, 24, 4, 7, 6, 8, 1, 12]);
        my_tree.add(1);
        my_tree.add(5);
        //                     5   3   1   newlyadded
        assert.equal(my_tree.root.left.left.right.value, 1);
        //                     5     24   7    6   newlyadded
        assert.equal(my_tree.root.right.left.left.left.value, 5);
    })
})

describe('Binary Tree Traversal', function () {
    var my_tree = new Tree([5, 3, 24, 4, 7, 6, 8, 1, 12]);
    it('Normal Traversal', function () {
        expect(my_tree.traverse()).to.eql([5, 3, 1, 4, 24, 7, 6, 8, 12])
    })

    it('Inorder Traversal', function () {
        expect(my_tree.traverse('inorder')).to.eql([1, 3, 4, 5, 6, 7, 8, 12, 24])
    })

    it('Preorder Traversal', function () {
        expect(my_tree.traverse('preorder')).to.eql([5, 3, 1, 4, 24, 7, 6, 8, 12])
    })

    it('Postorder Traversal', function () {
        expect(my_tree.traverse('postorder')).to.eql([1, 4, 3, 6, 12,8, 7, 24, 5])
    })
})

describe('Binary Tree find min value of Subtree', function(){
    var initial_array = [5, 3, 24, 4, 7, 6, 8, 1, 12, 6, 30, 28];
    it('Finds min value of the right subtree', function(){
        var my_tree = new Tree(initial_array);
        assert.equal(my_tree.find_min(my_tree.root.right).value, 6);
        assert.equal(my_tree.find_min(my_tree.root.right.right).value, 28);
    })

    it('Finds min value of the left subtree', function(){
        var my_tree = new Tree(initial_array);
        assert.equal(my_tree.find_min(my_tree.root.left).value, 1);
        assert.equal(my_tree.find_min(my_tree.root.left.left).value, 1);
    })
})

describe('Binary Tree find max value of Subtree', function(){
    var initial_array = [5, 3, 24, 4, 7, 6, 8, 1, 12, 6, 30, 28];
    it('Finds max value of the right subtree', function(){
        var my_tree = new Tree(initial_array);
        assert.equal(my_tree.find_max(my_tree.root.right).value, 30);
        assert.equal(my_tree.find_max(my_tree.root.right.right).value, 30);
    })

    it('Finds max value of the left subtree', function(){
        var my_tree = new Tree(initial_array);
        assert.equal(my_tree.find_max(my_tree.root.left).value, 4);
        assert.equal(my_tree.find_max(my_tree.root.left.left).value, 1);
    })
})

describe('Binary Tree Deletion', function(){
    var initial_array = [5, 3, 24, 4, 7, 6, 8, 1, 12, 6, 30, 28, 11, 9]
    it('Deletes the root node and verifies', function(){
        var my_tree = new Tree(initial_array);
        my_tree.delete(5)
        assert.equal(my_tree.root.value, 6); 
        assert.equal(my_tree.root.right.left.left.value, 6);
    })

    it('Deletes the node with children', function(){
        var my_tree = new Tree(initial_array);
        my_tree.delete(24) //5R => 12R => 24R => 30L => 28
        assert.equal(my_tree.root.right.right.value, 30); //5R => 12R => 28R => 30
        assert.equal(my_tree.root.right.right.parent.value, 28); //5R => 12R => 28R => 30
        assert.equal(my_tree.root.right.left.value, 7); //5R => 12R => 28R => 30
    })

    it('Deletes the node with children', function(){
        var my_tree = new Tree(initial_array);
        my_tree.delete(12) ////5R => 24L => 7R => 8R => 12L => 11L => 9
        assert.equal(my_tree.root.right.left.right.right.value, 11); //5R => 24L => 7R => 8R => 11L => 9 
        assert.equal(my_tree.root.right.left.right.right.parent.value, 8); //5R => 12R => 28R => 30
    })

    it('Deleting a element which is not present in tree', function(){
        var my_tree = new Tree(initial_array);
        assert.equal(my_tree.delete(15), false)
    })

    it('Deleting a node without any children', function(){
        var my_tree = new Tree(initial_array);
        my_tree.delete(9) ////5R => 24L => 7R => 8R => 12L => 11L => 9
        console.log((my_tree.root.right.left.right.right.left.left))
        my_tree.delete(4) ////5R => 3R => 4
    })
})

