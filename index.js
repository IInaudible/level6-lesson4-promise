// Assignment: The Concert Promise
//
//
// Description:
// Our friends have promised to take us to a concert. The concert
// is about an hour's drive away from home. Let's see if the
// promise can be kept, or if anything prevents us along the way.
//
// Once you've completed the activity, you can run the code
// multiple times to see the promise kept and not kept depending
// on if anything gets in the way or not.
//
//
// Instructions:
//
// Step 1: Inside the section of this file that says
//				 "Assignment Code Goes Here", create a new Promise
//         object by calling the pre-made function named
//         "fetchConcertPromise" and storing the returned
//         Promise object into a variable named whatever you
//         prefer.
//
// Step 2: Using the Promise variable you just created, chain a
//         "then" call onto it in order to handle the success
//         case.
//
//         Since "then" calls require a callback function,
//         create and provide an anonymous callback function
//         that takes a single parameter of data.
//
//         Log that single parameter to the console to see the
//         success data sent back (in this case, it's a message).
//
// Step 3: Using the "then" call you just created, chain a
//         "catch" call onto its returned Promise object in
//         order to handle the failure case.
//
//         Since "catch" calls require a callback function,
//         create and provide an anonymous callback function
//         that takes a single parameter.
//
//         Log that single parameter to the console to see the
//         failure data sent back (in this case, it's a message).
//
// Step 4: Run the program in Node.js repeatedly until you see
//         both the success message and at least one failure
//         message (not JavaScript error message) which were pre-
//         made for this assignment. Now you're ready to submit.
//
// Step Bonus: In the case where the group fails to make it to
//          	 the concert, make one more concert promise attempt
//             and try to fulfill the concert promise again.


// ⬇⬇⬇⬇⬇⬇ Assignment Code Goes Here ⬇⬇⬇⬇⬇⬇



// ⬆⬆⬆⬆⬆⬆ Assignment Code Goes Here ⬆⬆⬆⬆⬆⬆


// NOTE: Review the pre-made code below to learn how it
//       functions and interacts with the rest of your code;
//       however, do not change any code below in the
//       submission of the assignment!

function fetchConcertPromise() {
	return new Promise(function(resolve, reject){
		let travelResult = travelToConcert();
		if (travelResult.madeItToConcert) {
			resolve('We made it! The concert was great!');
		}
		else {
			reject(`We didn't make it! ${travelResult.failureReason}`);
		}
	});
}

function travelToConcert() {
	// Flip a coin. 1 is success. 0 is failure.
	if (Math.round(Math.random()) === 1) {
		return {
			madeItToConcert: true,
			failureReason: ''
		};
	}
	else {
		const FAILURE_REASONS = [
			'Encountered insane traffic congestion and was unable to make it on time!',
			'Accidentally went a day late and missed the concert!',
			'Something came up, and everybody decided to do something else instead!',
			'Arrived at the concert late and was not allowed into the venue!',
		];
		const RANDOM_INDEX = Math.floor(Math.random() * FAILURE_REASONS.length);
		return {
			madeItToConcert: false,
			failureReason: FAILURE_REASONS[RANDOM_INDEX]
		};
	}
}