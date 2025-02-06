```javascript
//Correct data type for the field in Firestore.  Ensure that the data type matches the field's definition.
const db = firebase.firestore();
db.collection('myCollection').doc('myDoc').set({
  myArray: ['1', '2', '3'], // Correct: storing strings in an array
  // Or if the field should be an array of numbers:
  // myArray: [1,2,3]   // Correct only if the field is defined as an array in Firestore
});
// Alternatively, use a transaction to prevent this issue, ensuring data types are consistent before writing:
const docRef = db.collection('myCollection').doc('myDoc');
db.runTransaction(transaction => {
  return transaction.get(docRef).then(doc => {
    if (!doc.exists) {
      throw new Error('Document does not exist!');
    }
    // Check your data type and match it here
    let newArray = doc.data().myArray ? [...doc.data().myArray, '4'] : ['1', '2', '3', '4'];
    transaction.update(docRef, {myArray: newArray }); // Correct, handles existing data
  });
}).then(() => {
  console.log('Transaction successfully committed!');
}).catch(err => {
  console.log('Transaction failed: ', err);
});
```