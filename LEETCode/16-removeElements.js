// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let List1 = new ListNode(7, new ListNode(7, new ListNode(7, null)));

var removeElements = function(head, val) {
    if (head == undefined) return head;
    let headArray = [];
    while (head !== null) {
        headArray.push(head.val);
        head = head.next;
    }
    headArray = headArray.filter((item)=>item !== val)
    const myListnode = [];
    for (let i = 0; i < headArray.length; i++) {
        myListnode.push(new ListNode(headArray[i], null));
    }
    myListnode.map((item, index) => {
        item.next = !!myListnode[index + 1] ? myListnode[index + 1] : null;
    });
    return myListnode[0] === undefined ? head : myListnode[0];
};

console.log(removeElements(List1,7))