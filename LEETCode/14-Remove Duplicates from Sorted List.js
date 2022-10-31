function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let List1 = new ListNode(1, new ListNode(1, new ListNode(2, null)));
var deleteDuplicates = function (head) {
    if (head == undefined) return head;
    let headArray = [];
    while (head !== null) {
        headArray.push(head.val);
        head = head.next;
    }
    headArray = [...new Set(headArray)];
    const myListnode = [];
    for (let i = 0; i < headArray.length; i++) {
        myListnode.push(new ListNode(headArray[i], null));
    }
    myListnode.map((item, index) => {
        item.next = !!myListnode[index + 1] ? myListnode[index + 1] : null;
    });
    return myListnode[0];
};
console.log(deleteDuplicates(List1));
