exports.Tree = class {
    constructor(values) {
        this.root = undefined;
        this.depth = 0;
        for (var i = 0; i < values.length; i++) {
            this.add(values[i])
        }
    }

    add(value) {
        if (this.root) {
            let position = this.get_position(value);
            position.node[position.branch] = new Node(value, position.node);
        }
        else {
            this.root = new Node(value); //initialize
        }
    }

    delete(value) {
        var node = this._detect_node(value, this.root)
        if (node) {
            var heir;
            if (node.right) {
                heir = this.find_min(node.right)
                node.value = heir.value;
                this._leave_kids_to_gramps(heir, heir.right)
            } else if (node.left) {
                heir = this.find_max(node.left)
                node.value = heir.value;
                this._leave_kids_to_gramps(heir, heir.left)
            } else {
                if(node.value > node.parent.value){
                    node.parent.right = null;
                } else{
                    node.parent.left = null;
                }
                node = null
            }

        } else {
            return false;
        }
    }

    _leave_kids_to_gramps(me, child) {
        if (child == null) {
            me = null;
        } else {
            child.parent = me.parent;
            Object.assign(me, child);
        }
    }

    _detect_node(value, node) {
        if (node) {
            if (node.value < value) {
                return this._detect_node(value, node.right)
            } else if (node.value > value) {
                return this._detect_node(value, node.left)
            } else if (node.value == value) {
                return node;
            }
        }
    }

    find_min(node) {
        if (node.left) {
            return this.find_min(node.left)
        } else {
            return node;
        }
    }

    find_max(node) {
        if (node.right) {
            return this.find_max(node.right)
        } else {
            return node;
        }
    }

    get_position(value) {
        let current_node = this.root;
        var position;
        while (1) {
            if (current_node.value > value && current_node.left) {
                current_node = current_node.left;
            } else if (current_node.value < value && current_node.right || current_node.value == value && current_node.right) {
                current_node = current_node.right;
            } else {
                if (current_node.value > value) {
                    position = 'left';
                } else {
                    position = 'right';
                }
                return { 'node': current_node, 'branch': position }
            }
        }
    }

    // print(){
    //     this.traverse();
    //     var depth_values = []
    //     this._get_depth_values(this.root, 1, depth_values);
    //     console.log(depth_values);
    //     for(var current_depth = 1;current_depth <= this.depth;current_depth++){
    //         var required_space = ((Math.pow(2,this.depth) - 1 ) - (Math.pow(2, current_depth) - 1)) / 2;
    //         console.log(`${' '.repeat(required_space)}${depth_values[current_depth]}`);
    //     }
    // }

    // _get_depth_values(node, depth, depth_values){
    //     if(node){
    //         depth_values[depth] = depth_values[depth] ? `${depth_values[depth]}_${node.value}` : `${node.value}`;
    //         this._get_depth_values(node.left, depth+1, depth_values)
    //         this._get_depth_values(node.right, depth+1, depth_values)
    //     }else{
    //         depth_values[depth] = depth_values[depth] ?  `${depth_values[depth]}__` : `__`;
    //     }
    // }

    traverse(type) {
        // traverse from left to left most 
        var traverse_values = [];
        if (type == "inorder") {
            this._inorder(this.root, traverse_values)
        } else if (type == "preorder") {
            this._preorder(this.root, traverse_values)
        } else if (type == "postorder") {
            this._postorder(this.root, traverse_values)
        } else {
            this._iterate(this.root, traverse_values, 1)
        }
        console.log(traverse_values);
        return traverse_values;

    }

    _breath_first(node){

    }

    _depth_first(node){

    }

    _inorder(node, values) {
        // Left, Root, Right   ( Also Smallest value to biggest value )
        if (node) {
            if (node.left) this._inorder(node.left, values)
            values.push(node.value);
            if (node.right) this._inorder(node.right, values)
        }
    }

    _preorder(node, values) {
        // Root, Left, Right
        if (node) {
            values.push(node.value);
            if (node.left) this._preorder(node.left, values)
            if (node.right) this._preorder(node.right, values)
        }
    }

    _postorder(node, values) {
        // Left, Right, Root
        if (node) {
            if (node.left) this._postorder(node.left, values)
            if (node.right) this._postorder(node.right, values)
            values.push(node.value);
        }
    }

    _iterate(node, traverse_values, depth) {
        if (node) {
            traverse_values.push(node.value);
            if (depth > this.depth) {
                this.depth = depth;
            }
            this._iterate(node.left, traverse_values, depth + 1)
            this._iterate(node.right, traverse_values, depth + 1)
        }
    }
}

class Node {
    constructor(value, parent) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = parent;
    }
}