// Initial guest list
const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// Step 1 
// Caesar remembers he forgot to add his best friend "BRUTUS" to the list.
guests.unshift("BRUTUS"); 

// Question 1 
// How can you verify that "BRUTUS" was added?
// Answer: You can check the first element of the array.
console.log(guests[0]); // Output: "BRUTUS"

// Step 2 
// Add "AUGUSTUS" and "LUCIA" to the end of the list.
guests.push("AUGUSTUS", "LUCIA");

// Step 3 
// Check if "SPARTACUS" is on the list.
const spartacusIndex = guests.indexOf("SPARTACUS");

// Question 2 
// What if Spartacus isn't invited?
// Answer: indexOf would return -1
console.log(spartacusIndex); // Output: -1 (if not found)

// Step 4 
// "CASSIUS" can't make it — remove him.
const indexToRemove = guests.indexOf("CASSIUS");
if (indexToRemove !== -1) {
  guests.splice(indexToRemove, 1);
}

// Step 5 
// Get the first three guests for a special invite.
const specialGuests = guests.slice(0, 3);

// Step 6 
// Caesar wants to sort the list but keep the first guest at the top.
const honoredGuests = guests.slice(0, 1); 
const otherGuests = guests.slice(1); 
otherGuests.sort(); 
const sortedGuests = honoredGuests.concat(otherGuests);

// Final output
console.log(" Final Guest List:", sortedGuests);
console.log(" Special Guests:", specialGuests);
