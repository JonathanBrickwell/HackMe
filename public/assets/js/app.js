document.addEventListener("DOMContentLoaded", function() {

    const db = firebase.firestore();
    const myQuizData = db.collection('answers').doc('quiz_data');

    myQuizData.get()
        .then(doc => {
            const data = doc.data();
            console.log(data.answer_1);
        });

});