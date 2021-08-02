// Prototypes, Classes & The New Operator

//Prototypes - Contains all the methods and properties associated to an object/element. One prototype and the object has a reference to those methods using __proto__
// think of them as the object templates

// We can create new objects and add these prototypes to them allowing us to use all the associated methods.
// String.prototype.yell = function () {
//     console.log(this.toUpperCase());
// }
// // granted strings are a little different than objects but the fundamentals are similar. In the above code we are adding a property to the string prototype and then we can call it as follows
// // "hello".yell(); // HELLO

// // technically we could also change methods and properties that are assigned to data types like arrays
// Array.prototype.pop = "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!";
// [3,4,5].pop() // "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"  This is now the method that will be applied to all arrays when using arr.pop()

//Array.prototype = is the actual object template, __proto__ is a reference to the template



//An Intro to OOP
// a way to take a reciepe and create an object with a bunch of properties

// function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r,g,b) {
//     return `rgb(${r}, ${g}, ${b} )`;
// }

// // we can use factory functions but this has a shortcoming (the functions declared inside are unique and recreated for each object that they are called on. firstColor.hex() === newColor.hex() // false)
// function makeColor (r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const {r, g, b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function () {
//         const {r, g, b} = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(125, 200, 54);
// firstColor.hex();

// // Constructor Functions (a better pattern, as the functions are located on the prototype)

// // Creates a blank, plain Javascript object;
// // Links (sets the contructor of) this object to another object;
// // Passes the newly created object from Step 1 as the this context;
// // Returns this if the function doesn't return it's own object

// function Color (r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// // define new method on the prototype of Color
// Color.prototype.rgb = function () {
//     const {r, g, b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//     const {r, g, b} = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a = 1.0) {
//     const {r, g, b} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`
// }

// const color1 = new Color(255, 40 , 100);
// const color2 = new Color(0, 0, 0);
// the new operator creates a new "this"
// Biggest thing about using constructor functions is that we can have a different defined variable with different values and still access the methods and..
// color1.hex === color2.hex // True!


// To make this prettier we now have JS Classes!!!!

class Color { // name is Capitalized for classes or constructor functions
    constructor(r, g, b, name = 'Colors') { //have to have "constructor" for a class
        this.r = r;  // this automatically refers to the new object
        this.g = g;
        this.b = b;
        this.name = name; // common to name the property the same as the argument
        this.calcHSL();
    }
    innerRGB () {
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`
    }
    // these are ways to add methods, shorthand functions to create methods
    rgb () {
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }
    hex () {
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    hsl () {
        const {h, s, l} = this;
        return `hsl(${h}, ${s}%, ${l}%)`
    }
    fullySaturated () {
        const {h, l} = this;
        return `hsl(${h}, 100%, ${l}%)`
    }
    opposite () {
        const {h, s, l} = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`
    }
    calcHSL() {
        let { r, g, b } = this;
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;
    
        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b,),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
            if (delta == 0 ) h = 0;
            else if (cmax == r)
                // Red is max
                h = ((g-b) / delta) % 6;
            else if (cmax == g)
                // Green is max
                h = (b - r) / delta + 2;
            else
                // Blue is max
                h = (r - g) / delta + 4;
    
            h = Math.round(h * 60);
    
            // Make negative hues postive behind 360
            if (h < 0) h += 360;
            // Calculate lightness
            l = (cmax + cmin) / 2;
    
            // Calculate saturation
            s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l -1));
    
            // Multiply l and s by 100
            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);
            this.h = h;
            this.s = s;
            this.l = l
    }
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, "white");


// Extends, Super, Subclasses

class Pet {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    eat () {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet { // Cat has become a subclass of Pet by using the 'extends' keyword
    constructor (name, age, livesleft = 9) {
        super(name, age) // super is reference to the super class (Pet)
        this.livesleft = livesleft;
    }
    meow () {
        return 'MEOWWW!!';
    }
}

class Dog extends Pet {
    bark () {
        return "Whoof!!"
    }
    eat () {
        return `${this.name} scarfs his food!`; // because eat is a method on dog it will return this value, if it was not here, it would look to pet and return that value
    }
}