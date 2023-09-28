#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void appendNode(struct Node** headRef, int newData) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    struct Node* last = *headRef;
    newNode->data = newData;
    newNode->next = NULL;

    if (*headRef == NULL) {
        *headRef = newNode;
        return;
    }

    while (last->next != NULL) {
        last = last->next;
    }

    last->next = newNode;
}

void displayList(struct Node* node) {
    while (node != NULL) {
        node = node->next;
    }
}

int main() {
    struct Node* head = NULL;

    appendNode(&head, 12);
    appendNode(&head, 34);
    appendNode(&head, 56);
    appendNode(&head, 78);

    displayList(head);

    return 0;
}
