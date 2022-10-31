// solution 1

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let List1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
let List2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
let List3 = new ListNode();
let List4 = new ListNode();

// let x = new ListNode(1,null)
// console.log(x)
// let y = new ListNode(2,null)
// x.next = y
// for (let i = 3; i<7; i++) {
//     y.next = new ListNode(i,null)
//     y = y.next
// }
// console.log('x')
// console.log(x)

var mergeTwoLists = function (list1, list2) {
    if (list1 == undefined && list2 == undefined) return list1;
    let a = list1;
    let b = list2;
    const array1 = [];
    const array2 = [];

    while (a !== null) {
        array1.push(a.val);
        a = a.next;
    }
    while (b !== null) {
        array2.push(b.val);
        b = b.next;
    }
    const convertArray = [...array1, ...array2].sort((a, b) => a - b);

    let myListnode = [];
    for (let i = 0; i < convertArray.length; i++) {
        myListnode.push(new ListNode(convertArray[i], null));
    }
    myListnode.map((item, index) => {
        item.next = !!myListnode[index + 1] ? myListnode[index + 1] : null;
    });
    myListnode.filter(Boolean);
    let x = myListnode[0];
    while (x != null) {
        console.log(x.val);
        x = x.next;
    }

    return myListnode[0];
};
console.log(mergeTwoLists(List1, List2));
console.log(mergeTwoLists(List3, List4));
