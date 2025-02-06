```javascript
//Incorrect data type for a field in Firestore.  Example: Attempting to store an array in a field defined as a string.
const db = firebase.firestore();
db.collection('myCollection').doc('myDoc').set({
  myArray: [1, 2, 3], // Error if 'myArray' field is defined as a string in Firestore
});
```