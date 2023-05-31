const a=document.getElementById("a"); //header
const b=document.getElementById("b");
const c=document.getElementById("c");
const d=document.getElementById("d");
const e=document.getElementById("e");

const arr=[7,3,21,12,13,48,43,31,15,2,33];

class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinaryTree {
  constructor() {
      this.root = null;
  }

  insert(value) {
      const node = new Node(value);
      if (!this.root) {
          this.root = node;
          return;
      }
      let current = this.root;
      while (true) {
          if (value < current.value) {
              if (!current.left) {
                  current.left = node;
                  return;
              }
              current = current.left;
          } else if (value > current.value) {
              if (!current.right) {
                  current.right = node;
                  return;
              }
              current = current.right;
          } else {
              return;
          }
      }
  }

  getBranches(node, sum, branches) {
      if (!node) return;

      sum += node.value;

      if (sum === 2022 && !node.left && !node.right) {
          branches++;
          console.log(`Branches: ${branches}`);
          return;
      }

      this.getBranches(node.left, sum, branches);
      this.getBranches(node.right, sum, branches);
  }
}

const tree = new BinaryTree();
for (x in arr){
tree.insert(arr[x]);
}

tree.getBranches(tree.root, 0, 0);