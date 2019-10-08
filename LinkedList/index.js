class Node { 
    constructor(data, next = null) { 
        this.data = data;
        this.next = next;
    }
}

class LinkedList { 
    constructor() { 
        this.head = null; 
        this.size = 0; 
    }

    // insert first node 
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++
    }

    // insert last node 
    insertLast(data){
        let node = new Node(data);
        let current; 

        //if empty, make the head
        if(this.head == null){
            this.head = node;
        } else { 
            current = this.head; 
            //take us to the last node
            while(current.next) {
                current = current.next;
            }
            current.next = node; 
        }
        this.size++;
    }

    // insert at index 
    insertAt(data, index){
        //if index is out of range. 
        if(index > 0 && index > this.size){
            return 'incorrect index';
        }

        //if first index
        if(index == 0){
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0; 

        while(count < index){
            previous = current;  // Node before index
            console.log(`previous: ${previous.data}`)
            count++;
            current = current.next; // Node after index;
            console.log(`this head : ${current.data}`)

        }

        node.next = current;
        previous.next = node;

        this.size++;
    }


    // Get at index 
    getAt(index){
        let current = this.head; 
        let count = 0; 

        if(index < 0 || index > this.size){
            return 'wrong index';
        }

        while(count < index){
            current = current.next; 
            count ++
        }
        console.log(current.data);
    }

    // Remove at index 
    removeAt(index){
        let count = 0;

        if(index < 0 || index > this.size){
            return 'wrong index';
        }

        let previous,current;
        current = this.head;

        if (index == 0){
            this.head == current.next;
        } else {

            while(count < index){
                previous = current; 
                current = current.next; 
                count++
            }

            previous.next = current.next; 
         }
         this.size --;
    }

    // Clear list 
    clearList(){
        this.head = null;
        this.size = 0;
    }

    // Print list data 
    printListData() { 
     let current = this.head;
     while(current){
         console.log(current.data);
         current = current.next; 
     }
    }

}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500,2);

ll.printListData();

console.log("*****");
ll.getAt(1);

ll.removeAt(1);
ll.getAt(1);

console.log("*****");
ll.printListData();

