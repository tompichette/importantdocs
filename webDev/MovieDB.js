var movieRatings = [
{
	title: "The Usual Suspects",
	rating: 5,
	watched: true
},
{
	title: "Les Miserables",
	rating: 3.5,
	watched: false
},
{
	title: "Home Alone 2",
	rating: 4,
	watched: true
}
]

function movieReport(arr){
	for(i = 0; i < arr.length; i++){
		if(arr[i].watched = true) {
		console.log("You have watched " + "\"" + arr[i].title + "\"" + " - " + arr[i].rating + " stars");
		} else { 
		console.log("You have not watched " + "\"" + arr[i].title + "\"" + " - " + arr[i].rating + " stars");
		}
	}
};