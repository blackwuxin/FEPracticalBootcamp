

function Node(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
}
//链表类
function LList () {
    this.head = new Node( 'head' );     //头节点
    this.find = find;                   //查找节点
    this.insert = insert;               //插入节点
    this.display = display;             //显示链表

    function find ( item ) {
        var currNode = this.head;
        while ( currNode.element != item ){
            currNode = currNode.next;
        }
        return currNode;
    }
    function insert ( newElement , item ) {
        var newNode = new Node( newElement );
        var currNode = this.find( item );
        newNode.next = currNode.next;
        currNode.next = newNode;
    }
    function display () {
        var currNode = this.head;
        while ( !(currNode == null) ){
            console.log( currNode.element );
            currNode = currNode.next;
        }
    }
}
var fruits = new LList();

fruits.insert('Apple' , 'head');
fruits.insert('Banana' , 'Apple');
fruits.insert('Pear' , 'Banana');

fruits.display();

console.log('reverseList:');

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

fruits.head = reverseList(fruits.head);
fruits.display()

