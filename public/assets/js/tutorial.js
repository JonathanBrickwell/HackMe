document.addEventListener("DOMContentLoaded", function() {

    const db = firebase.firestore();
    const myQuizData = db.collection('answers').doc('quiz_data');

    myQuizData.onSnapshot(doc => {
        const data = doc.data();
        console.log(data.answer_2);
    });
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
                .then(result => {
                    const user = result.user;
                    document.write(`Hello ${user.displayName}`);
                    console.log(user); 
                })
                .catch(console.log);
}