#include <iostream>
#include <vector>
#include <bits/stdc++.h>

using namespace std;

// Function to process the data
void processData(const vector<int>& elements, int speed) {
    // Example processing: print the elements and speed
    cout << "Elements: ";
    for (int element : elements) {
        cout << element << " ";
    }
    cout << "\nSpeed: " << speed << endl;
}

int main() {
    int n;
    cout << "Enter the number of elements: ";
    cin >> n;

    vector<int> elements(n);
    cout << "Enter the elements: ";
    for (int i = 0; i < n; ++i) {
        cin >> elements[i];
    }

    int speed;
    cout << "Enter the speed: ";
    cin >> speed;

    // Call the function with the vector and speed
    processData(elements, speed);

    return 0;
}