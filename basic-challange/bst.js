// class node merupakan isi dari suatu node yang akan dibangun
// parameter yang dimiliki suatu node antara lain:
// ada value atau data, ada child kiri dan child kanan
class Node {
    constructor(value,left=null,right=null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data)

        this.root == null ? this.root = newNode : this.insertNode(this.root, newNode)
    }

    insertNode(node, newNode){
        if(newNode.data < node.data) {
            if(node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
}

// rereference 
// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/