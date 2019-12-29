document.addEventListener("DOMContentLoaded", function() {

    const db = firebase.firestore();
    const myQuizData = db.collection('answers').doc('quiz_data');

    myQuizData.onSnapshot(doc => {
        const data = doc.data();
        quizDataModel.push(new QuizDataModel(data));
    });
});