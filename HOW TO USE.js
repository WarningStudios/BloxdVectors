/* 
  === Vector3 Utility Toolkit ===

*/

/* Setup example vectors */
var a = [1, 2, 3];
var b = [4, 5, 6];
var center = [0, 0, 0];
var axis = [0, 1, 0];

/* --- Component Accessors --- */
console.log(a.x);         // → 1
console.log(a.y);         // → 2
console.log(a.z);         // → 3

a.x = 10;                 // sets a[0]
a.y += 1;
a.z -= 2;

/* --- In-place Vector Math --- */
a.add(b);                 // modifies a directly
a.multiply(0.5);          // scales a in-place
a.normalize();            // unit vector (in-place)

/* --- Non-mutating Math --- */
var sum = a.added(b);     // returns new vector
var scaled = a.multiplied(2);
var inv = a.invert();     // returns [-x, -y, -z]
var cloned = a.clone();   // makes a copy

/* --- Algebra & Geometry --- */
var dot = a.dot(b);       // dot product
var cross = a.cross(b);   // cross product result
var dist = a.distanceTo(b); // Euclidean distance
var len = a.magnitude();  // vector length
var len2 = a.sqrMagnitude(); // squared length

/* --- Interpolation --- */
var avg = a.average(b);   // midpoint between a and b
var mid = a.lerp(b, 0.5); // 50% lerp between a and b

/* --- Rotation --- */
var rotated = a.rotateAround(center, axis, 90);  // rotate a 90° around Y axis

/* --- Comparison --- */
var isSame = a.equals(cloned);        // strict equality
var isVec3 = isVector3(a);            // validity check

/* --- Rounding --- */
var round = a.round();     // nearest integers
var floor = a.floor();     // floors
var ceil = a.ceil();       // ceilings

/* --- Utility Shortcuts --- */
console.log(Vector3.up);       // → [0, 1, 0]
console.log(Vector3.forward);  // → [0, 0, 1]
console.log(Vector3.zero);     // → [0, 0, 0]
console.log(Vector3.one);      // → [1, 1, 1]

/*
Thats all! The code will fit in the world code limit.
*/
