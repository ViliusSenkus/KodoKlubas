const a=document.getElementById("a"); //header
const b=document.getElementById("b");
const c=document.getElementById("c");
const d=document.getElementById("d");
const e=document.getElementById("e");


// const num = 2022;

// const arr=[7,3,21,12,13,48,43,31,15,2,33];

// find = 0;

// // skaičiuojam maksimalų galimą skaičių susidarantį iš iteracinio skaičiaus
// // ....ir prieš tai buvusios sumos. 
// function max(){
//       counter = 0;
//       let check = 0;  //skaitmuo lyginamas su galimu maksimumu ---reiki jį prilyginti ankstesniai sumai.

//       //pridėdinėjam kol gausim daugiau už
//       while (check <= num){
//             check += arr[1]
//             counter++;
//             if (check >= num){
//                   counter ++;
//             }
//       }
//       return [counter, check];
// }
// console.log(count());

// function regres(){
//       let n = num;
//       let counter=0;
//       let divider = Math.floor(num / arr[10]);
//       let remain = num % arr[10];
//       if (remain === 0){
//             counter++;
//             return;
//       } else {
//             n = n - (divider * arr[10]);
//             let divider = Math.floor(n / arr[9]);
//             let remain = n % arr[9];
//       }
//       console.log(divider);
//       console.log(remain);

// }

// regres();

// function calc(){
//       let sum = 0
//       if (sum >2022){
//             return 0;
//       }
// }

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------


// class TreeNode {
//       constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//       }
//     }
    
//     const root = new TreeNode(7);
//     root.left = new TreeNode(3);
//     root.right = new TreeNode(21);
//     root.left.left = new TreeNode(12);
//     root.left.right = new TreeNode(13);
//     root.right.left = new TreeNode(48);
//     root.right.right = new TreeNode(43);
//     root.right.left.left = new TreeNode(31);
//     root.right.left.right = new TreeNode(15);
//     root.right.right.left = new TreeNode(2);
//     root.right.right.right = new TreeNode(33);
    
//     function dfsWithRepetition(node, targetSum, currentSum = 0, path = [], result = []) {
//       if (currentSum > targetSum) {
//         return;
//       }
//       if (currentSum === targetSum) {
//         result.push([...path]);
//         return;
//       }
//       for (let child of [node.left, node.right]) {
//         if (child !== null) {
//           path.push(child.val);
//           dfsWithRepetition(child, targetSum, currentSum + child.val, path, result);
//           path.pop();
//         }
//       }
//     }
    
//     function countBranchesWithResult(node, targetSum) {
//       const paths = dfsWithRepetition(node, targetSum);
//       return paths.length;
//     }
    
//     console.log(countBranchesWithResult(root, 2022));

// ---------------------------------------------------------------------------------------------

// class Node {
//       constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//       }
//     }
    
//     function createBinaryTree() {
//       const root = new Node(7);
//       root.left = new Node(3);
//       root.right = new Node(21);
//       root.left.left = new Node(12);
//       root.left.right = new Node(13);
//       root.right.left = new Node(48);
//       root.right.right = new Node(43);
//       root.left.left.left = new Node(31);
//       root.left.right.left = new Node(15);
//       root.left.left.right = new Node(2);
//       root.left.right.right = new Node(33);
    
//       function sum(node) {
//         if (!node) return 0;
//         const leftSum = sum(node.left);
//         const rightSum = sum(node.right);
//         const nodeSum = node.value + leftSum + rightSum;
//         if (nodeSum >= 2022) {
//           node.left = null;
//           node.right = null;
//           return node.value;
//         }
//         return nodeSum;
//       }
    
//       sum(root);
    
//       return root;
//     }

//     console.log(createBinaryTree());

//     ---------------------------------------------------------------------------------
// ------------------------------------

class Node {
      constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }
    }
    
    function countBranches(root, targetSum) {
      let count = 0;
    
      function dfs(node, sum) {
        if (!node) return;
        sum += node.value;
        if (sum === targetSum) count++;
        dfs(node.left, sum);
        dfs(node.right, sum);
      }
    
      function traverse(node) {
        if (!node) return;
        dfs(node, 0);
        traverse(node.left);
        traverse(node.right);
      }
    
      traverse(root);
    
      return count;
    }
    
    const root = new Node(7);
    root.left = new Node(3);
    root.right = new Node(21);
    root.left.left = new Node(12);
    root.left.right = new Node(13);
    root.right.left = new Node(48);
    root.right.right = new Node(43);
    root.left.left.left = new Node(31);
    root.left.right.left = new Node(15);
    root.left.left.right = new Node(2);
    root.left.right.right = new Node(33);
    
    console.log(countBranches(root, 2022));