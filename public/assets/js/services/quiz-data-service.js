document.addEventListener("DOMContentLoaded", function() {

    const db = firebase.firestore();
    const myQuizData = db.collection('answers').doc('quiz_data');

    myQuizData.get().then(function(collection) {
        if(collection.exists) {
            const data = collection.data();
            QuizDataModel(data);
            quizDataModel.push(new QuizDataModel(data));
        } else {
            console.log("No such document exists in the database");
        }  
    }).catch(function(error) {
        console.log("There seems to be an error: ", error);
    });
});