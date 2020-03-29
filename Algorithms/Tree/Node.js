module.exports = class Node {
    constructor(val) {
        this.value = val;
        this.nodeL = null;
        this.nodeR = null;
    }
    visit() {
        if (this.nodeL != null) this.nodeL.visit();
        console.log(this.value);
        if (this.nodeR != null) this.nodeR.visit();
    }

    search(val) {
        if (val == this.value) return this;
        else if (val < this.value && this.nodeL != null) return this.nodeL.search(val);
        else if (val > this.value && this.nodeR != null) return this.nodeR.search(val);
        else return null;

    }
    addNode(node) {
        if (node.value < this.value) {
            if (this.nodeL == null) this.nodeL = node;
            else this.nodeL.addNode(node);
        } else if (node.value > this.value) {
            if (this.nodeR == null) this.nodeR = node;
            else this.nodeR.addNode(node);
        }
    }
    findMin(node) {
        if (this.nodeL == null) return this.value;
        else  return this.nodeL.findMin(this.nodeL);
    }
    findMax(node) {
        if (this.nodeR == null) return this.value;
        else return this.nodeR.findMax(this.nodeR);
    }
}