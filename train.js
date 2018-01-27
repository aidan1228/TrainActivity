var config = {
    apiKey: "AIzaSyCBVYOvvpViSDxGkWD3pnUF8zVRCD_2goU",
    authDomain: "aidan-firbase-intro.firebaseapp.com",
    databaseURL: "https://aidan-firbase-intro.firebaseio.com",
    projectId: "aidan-firbase-intro",
    storageBucket: "aidan-firbase-intro.appspot.com",
    messagingSenderId: "50801527286"
  };

firebase.initializeApp(config);

var database = firebase.database();

$("#submit").on("click", function(event) {
    event.preventDefault();
    var name = $("#name-input").val().trim();
    var destination = $("#role-input").val().trim();
    var firstTrain = $("#start-input").val().trim();
    var frequency = $("#rate-input").val().trim();

    console.log(name);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);

	database.ref().set({
   		name: name,
    	destination: destination,
    	firstTrain: firstTrain,
    	frequency: frequency
    });
});
database.ref().on("child_added", function(childSnapshot){
	var row = $("<tr>");
	var nameTd = $("<td>").append(childSnapshot.val().trim().name);
	var destinationTd = $("<td>").append(childSnapshot.val().trim().destination);
	var firstTrainTd = $("<td>").append(childSnapshot.val().trim().firstTrain);
	var frequencyTd = $("<td>").append(childSnapshot.val().trim().frequency);

	row.append(nameTd);
	row.append(destinationTd);
	row.append(firstTrainTd);
	row.append(frequencyTd);
	$("#tableEMP").append(row);

	// could not quite get the values to print to the html in time 
	// var nameTd = childSnapshot.val().trim().name;
	// var destinationTd = childSnapshot.val().trim().destination;
	// var firstTrainTd = childSnapshot.val().trim().firstTrain;
	// var frequencyTd = childSnapshot.val().trim().frequency;
	// var row = $("<tr><td>" + nameTd + "</td><td>" + destinationTd + "</td><td>" + firstTrainTd + "</td><td>" + frequencyTd + "</td></tr>");
	// console.log(row);

	// $("#tableEmp").append(row);

}, function(errorObject){
	console.log("error "+ errorObject.code);
});