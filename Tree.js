const Node = require("./Node.js");

module.exports = class Tree {
    constructor() {
        this.rootNode = null;
    }
    addValue(val) {
        if (this.rootNode == null) this.rootNode = new Node(val);
        else this.rootNode.addNode(new Node(val));
    }
    traverse() {
        if (this.rootNode == null) return false;
        this.rootNode.visit();
    }
    search(val) {
        if (val == null) return false;
        const result = this.rootNode.search(val);
        return result;
    }
    findMin(){
        if(this.rootNode == null) return false;
        return this.rootNode.findMin(this.root);
    }
    findMax(){
        if(this.rootNode == null) return false;
        return this.rootNode.findMax(this.root);
    }
}

