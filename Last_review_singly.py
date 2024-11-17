class Node:
    def __init__(self,data):
        self._data=data
        self._next=None

    @property
    def data(self):
        return self._data
    
    @data.setter
    def data(self,data):
        self._data=data

    @property
    def next(self):
        return self._next
    
    @next.setter
    def next(self,value):
        self._next=value

class Singly: 
    def __init__(self):
        self._head=None

    def insert_first(self,data):
        node=Node(data)

        if self._head:
            node._next=self._head
            self._head=node
        else:
            self._head=node
    def insert_last(self,data):
        node=Node(data)

        current=self._head

        if not self._head:
            self._head=node
            return
        else:
            while current._next:
                current=current._next
        
        current._next=node

    def insert_index(self,index,data):
        node=Node(data)

        current=self._head
        count=0

        while current and count < index-1:
            current= current._next 
            count+=1

        node._next=current._next
        current._next=node 
    def insert_Between(self,key,first_value,second_value):
        assert self._head, "link list is empty"
        first_node=Node(first_value)
        second_node=Node(second_value)


        current=self._head
        pre_current=None 
        post_current=None
        while current and current._data != key:
            pre_current=current
            current=current.next
            post_current=current._next

        pre_current._next=first_node
        first_node._next=current
        current._next=second_node
        second_node._next=post_current

    def insert_before(self,key,data):
        node= Node(data)


        current=self._head 
        pre_current=None

        while current and current._data  != key:
            pre_current=current
            current=current._next

        if pre_current is not None:
            pre_current._next=node
            node._next=current
        else:
            node._next=current
        
    def insert_after(self,key,data):

        node=Node(data)

        current=self._head
        post_current=None

        while current and current._data != key:
            current=current._next
            post_current=current._next

        current._next=node
        node._next=post_current



    def delete_first(self):
        assert self._head, "link list is empty"

        self._head=self._head._next

    def delete_index(self,index):
        assert self._head, "link list is empty"

        current=self._head
        count=0

        while current and count < index -1:
            

    def display(self):
        assert self._head, "link list is empty"

        current=self._head 

        while current:
            print(current._data,end="->")
            current=current._next
        print(None)

singly=Singly()

singly.insert_first(3)
singly.insert_first(7)
singly.insert_first(8)
singly.insert_first(9)
singly.display()
singly.insert_last(6)
singly.display()
singly.insert_index(1,99)
singly.display()
singly.insert_Between(99,33,44)
singly.display()
singly.insert_before(44,55)
singly.display()
singly.insert_after(44,3)
singly.display()
singly.delete_first()
singly.display()