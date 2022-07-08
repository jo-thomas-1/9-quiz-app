/* JS for score calculation */

function calculate_score()
{
	event.preventDefault(); // to cancel form submit

	console.log("Form Submitted");
}

// event listener for submit button
let submit_button = document.getElementById("submit_button");
submit_button.addEventListener("click", calculate_score);