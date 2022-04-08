const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = (numberClusters[2][1]);
console.log(target);


let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//removes last element & tells how many elements are inside
secretMessage.pop();
console.log(secretMessage.length);

//adds elements to end of array
secretMessage.push('to', 'program');
console.log(secretMessage);

//replaces element with string
secretMessage[7] = 'right';
console.log(secretMessage);

//removes first elements
secretMessage.shift();
console.log(secretMessage);

//adds element
secretMessage.unshift('Programming');
console.log(secretMessage);

//removes elements and adds
secretMessage.splice(6,5,  'know');
console.log(secretMessage);

// joins all elements together and prints out
console.log(secretMessage.join)