class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }
  /**
   * Append an item to the linkedlist
   * @param {*} value
   */
  append (value) {
    const node = new NodeLinkedList(value)
    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.length++
  }
  /**
   * prepend an item to the linkedlist
   * @param {*} value
   */
  prepend (value) {
    const node = new NodeLinkedList(value)
    node.next = this.head
    this.head = node
    if (this.tail == null) {
      this.tail = node
    }
    this.length++
  }
  /**
   * Add a value in the linkedlist
   * @param {number} index
   * @param {*} value
   */
  add (index, value) {
    const node = new NodeLinkedList(value)
    let count = 0
    if (index > this.length || index < 0) {
      return -1
    }
    // adding a value in a linkedlist without node or at the end of the linkedlist
    if (this.tail == null || index === this.length) {
      this.append(value)
      return index
    }
    let currentNode = this.head
    let previousNode = null
    while (count < index) {
      previousNode = currentNode
      currentNode = currentNode.next
      count++
    }
    node.next = currentNode
    previousNode.next = node
    this.length++
    return index
  }
  /**
   * search if the linkedlist contains the value passed in parameter
   * @param {*} value
   */
  contains (value) {
    if (this.head.value === value || this.tail.value === value) {
      return true
    }
    let currentNode = this.head.next
    let found = false
    while (currentNode != null && found === false) {
      if (currentNode.value === value) {
        found = true
      }
      currentNode = currentNode.next
    }
    return found
  }
  /**
   * remove the first instance of value passed in parameter
   * @param {*} value
   */
  remove (value) {}

  get (index) {
    
  }
  indexOf (value) {}
  size () {
    return this.length
  }
  clear () {
    this.head = null
    this.tail = null
    this.length = 0
  }
}
class NodeLinkedList {
  constructor (val) {
    this.value = val
    this.next = null
  }
}

module.exports = LinkedList
