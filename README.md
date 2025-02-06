# Firebase Firestore Data Type Mismatch
This example demonstrates a common yet subtle error in Firebase Firestore: a data type mismatch between the data being written and the field's definition in the database.
Specifically, attempting to write an array to a field defined as a string type in Firestore will often not result in an immediate, obvious error. Instead, it might lead to unexpected behavior or silent failure.
The `bug.js` file shows the problematic code, and `bugSolution.js` provides a solution.
## How to Reproduce
1. Set up a Firebase project and create a Firestore database.
2. Create a collection and document in Firestore.
3. Define the 'myArray' field in your Firestore schema as a string type (not an array).
4. Run the code in `bug.js`.  Observe that no error is thrown, but the data may not be stored correctly.
## Solution
The `bugSolution.js` file shows how to resolve the error by ensuring that the data type being written to Firestore matches the field's type definition.