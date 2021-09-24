// Given an array, find all the even numbers and multiply by 2
// function findEvenNums(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             arr[i] = arr[i] * 2
//         }
//     }
//     return arr
// }

// compare version numbers
// console.log("hello word!");
// function compareVersions(v1, v2) {
//     console.log("hello!");
//     if (v1 == v2)
//         return 0;
//     v1.replace('.', '');
//     v2.replace('.', '');
//     return v1 > v2
    
// }

// console.log(compareVersions('4.10.2', '4.11.3'));


for(var i=0;i<3;i++){
    console.log(i)
    setTimeout(()=>{console.log(i)}, 200)
}

//(urlString, paramArray) => urlString without repeated param and param in 2nd argument

function BFS(root) {
    
    if(!root) return []
    
    let res = [], queue = [root]
    
    while (queue.length !== 0) {
       
       const levelSize = queue.length
       const currLevel = []
       
       for (let i=0; i<levelSize; i++) {
           
           const node = queue.shift() 
           
           currLevel.push(node.val)
       
           if (node.left) {
               queue.push(node.left)
           }
      
           if (node.right) {
               queue.push(node.right)
           }
       }
       
       res.push(currLevel)
    }
    
    return res
};


// DFS
function Node(value) {
    this.value = value;
    this.left = null; //左分支指向
    this.right = null; //有分支指向
 }
 var a = new Node("A");
 var b = new Node("B");
 var c = new Node("C");
 var d = new Node("D");
 var e = new Node("E");
 a.left=b;
 a.right=c;
 b.left=d;  
 b.right=e;
 // 递归的方式实现
function deepTravel(tree) {
                            if(!tree){
                            return;
                          }
                            console.log(tree.value);
                            deepTravel(tree.left);
                            deepTravel(tree.right);
                        }
console.log(deepTravel(a));
//递归的表达性很好，也很容易理解，不过如果层级过深，很容易导致栈溢出。
//非递归实现DFS的思路：使⽤栈来将要遍历的节点压栈，然后出栈后检查此节点是否还有未遍历的节点，有的话压栈，没有的话就出栈。对于每个节点来说，先遍历当前节点，然后把右节点压栈，再压左节点（这样弹栈的时候会先拿到左节点遍历，符合深度优先遍历要求）

function deepTravel(tree) {
                            if(!tree) return
                            var stack=[];
                            stack.push(tree);
                            while(stack.length){
                                var temp=stack.pop();
                                console.log(temp);
                                if(temp.right){
                                    stack.push(temp.right);  
                                }
                                if(temp.left){
                                    stack.push(temp.left);  
                                }
                            }           
                          }


function Node(value) {
    this.value = value;
    this.left = null; //左分支指向
    this.right = null; //有分支指向
}
var a = new Node("A");
var b = new Node("B");
var c = new Node("C");
var d = new Node("D");
var e = new Node("E");
a.left=b;
a.right=c;
b.left=d;  
b.right=e;

//在⼴度优先遍历的过程中，把每⼀层的节点都添加到同⼀个数组中即可，问题的关键在于遍历同⼀层节点前，必须先算出同⼀层的节点有多少，不然由于 BFS ⽤的是队列来实现的，遍历过程中会不断把左右⼦节点⼊队，不事先算出同⼀层节点的话，会把同⼀层的左右节点也加到同⼀层的节点去
var levelOrder = function(root) {
    var res=[];
    var queue =[];
    if (root != null) {
        queue.push(root);
    }
    while (queue.length) {
        var  
        var level = [];
        for (var i = 0; i < n; i++) { 
            var node = queue.shift();
            level.push(node.val);
            if (node.left != null) {
                queue.push(node.left);
            }
            if (node.right != null) {
                queue.push(node.right);
            }
        }
        res.push(level);
    }
    return res;
};
console.log(levelOrder(a));
                 