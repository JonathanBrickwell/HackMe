document.addEventListener("DOMContentLoaded", function() {

    const db = firebase.firestore();
    const myQuizData = db.collection('answers').doc('quiz_data');

    myQuizData.onSnapshot(doc => {
        const data = doc.data();
        QuizComponent(data);
        quizDataModel.push(new QuizDataModel(data));

        if(!production) {
            console.log("Ovo je output iz servisa: ", quizDataModel);
        }
    });
});