/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0; // If there's no root, return 0 (empty tree case)
  
    let total = this.root.val; // Start with the root's value
  
    // Stack for iterative DFS
    const toVisitStack = [this.root]; // Start with the root node
  
    while (toVisitStack.length) {
      const current = toVisitStack.pop(); // Visit the current node
  
      // Traverse all children of the current node
      if (current.children) {
        for (let child of current.children) {
          total += child.val; // Add child's value to total
  
          // If the child has children, add them to the stack to visit later
          if (child.children && child.children.length > 0) {
            toVisitStack.push(child);
          }
        }
      }
    }
  
    return total; // Return the accumulated sum of all node values
  }
  
  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0; // If the tree is empty, return 0.
  
    let count = this.root.val % 2 === 0 ? 1 : 0; // Start with the root. If root is even, start count at 1.
  
    const toVisitStack = [this.root]; // Start with the root node in the stack.
  
    while (toVisitStack.length) {
      const current = toVisitStack.pop(); // Get the current node.
  
      // Traverse the children of the current node.
      for (let child of current.children) {
        // If the child node's value is even, increment the count.
        if (child.val % 2 === 0) {
          count++;
        }
  
        // If the child has any children, push them onto the stack to visit later.
        if (child.children && child.children.length > 0) {
          toVisitStack.push(child);
        }
      }
    }
  
    return count; // Return the final count of even nodes.
  }
  
  
  

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  
    numGreater(lowerBound) {
      if (!this.root) return 0;
  
      let count = this.root.val > lowerBound ? 1 : 0;
  
      function countEvensHelper(node) {
        // go through all the children for a Node
        for (let child of node.children) {
          // count the child if the value is greater than lowerBound
          if (child.val > lowerBound) count++;
          // if it has any children
          if (child.children.length > 0) {
            // recurse with the child as the root
            countEvensHelper(child);
          }
        }
      }
  
      countEvensHelper(this.root);
      return count; 
    
  }
}

module.exports = { Tree, TreeNode };
