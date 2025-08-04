console.log("2">1);
// why it is so because JavaScript performs type coercion during comparison.
//  When you use > between a string and a number,
//  JavaScript converts the string to a number
 console.log(null>0);
//  here we will get output asfalse 
//  cause > < conversion converts null into 0 
 console.log(null==0)
//  The == operator does not convert null to a number when compared to a number.
 console.log(null>=0)
//  this will get true because first > symbol will convert the null into 0 and 
// then the = operator will make this equation true that 0 is equal to zero

// so sum and the substance of this whole converstation was to make you realise
//  that we should avoid the following coversions because they can put us in state of confusion