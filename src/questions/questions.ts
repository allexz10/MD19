export {htmlQuestions, cssQuestions, jsQuestions}

const htmlQuestions: any = [
    {
      question: "Choose the correct HTML element for the largest heading:",
      options: [
        "&#60h&#62",
        "&#60heading&#62",
        "&#60h1&#62",
        "&#60head&#62",
      ],
      rightAnswer: "2",
    },
    {
      question: 'What does HTML stand for?',
      options: [
        "Cascading Style Sheets",
        "It is scripting language",
        "Hyper Text Markup Language",
        "Hot Mail",      
      ],
      rightAnswer: "2",
    },
    {
      question: "How many tags are in a regular element?",
      options: [
        "1",
        "2",
        "3",
        "4",
      ],
      rightAnswer: "1",
    },
    {
      question: "Who is making the Web Standards?",
      options: [
        "Mozilla",
        "Apple",
        "Microsoft",
        "The World Wide Web Consortium",
      ],
      rightAnswer: "3",
    },
    {
      question: "What is the correct sequence of HTML tags for starting a webpage?",
      options: [
        "Head, Title, HTML",
        "Title, Head, HTML",
        "HTML, Title, Head",
        "HTML, Head, Title",
      ],
      rightAnswer: "3",
    },
    {
      question: "What is the correct HTML tag for inserting a line break?",
      options: [
        "&#60Br&#62",
        "&#60br&#62",
        "&#60break&#62",
        "&#60space&#62",
      ],
      rightAnswer: "1",
    },
    {
      question: "What is the correct HTML for adding a background color?",
      options: [
        "body style = &quotbackground color: red&quot",
        "background red / background",
        "body background = &quotred&quot",
        "body: color = &quotred&quot",
      ],
      rightAnswer: "2",
    },
    {
      question: "What is the correct HTML for creating a hyperlink?",
      options: [
        "&lta href = &quothttp://www.codelex.io&quot&gtCodelex&lt/a&gt",      
        "&lta url = &quothttp://www.codelex.io&quot&gtCodelex.io &lt/a&gt",
        "&lta http://www.codelex.io /a&gt",
        "&lta name = &quothttp://www.codelex.io&quot&gtCodelex&lt/a&gt",
      ],
      rightAnswer: "0",
    },
    {
      question: "Which of these is not absent in HTML?",
      options: [
        "Tags",
        "Source file",
        "Tracking systems",
        "Fat links",
      ],
      rightAnswer: "0",
    },
    {
      question: "Which character entity would you use to display extra spaces on a webpage?",
      options: [
        "& reg;",
        "& gt;",
        "& lt;",
        "& nbsp;",
      ],
      rightAnswer: "3",
    },
  ];

  const cssQuestions: any = [
    {
      question: "How can you created rounded corners using CSS?",
      options: [
        "border[round]: 30px;",
        "corner-effect: round;",
        "border-radius: 30px;",
        "alpha-effect: round-corner;",
      ],
      rightAnswer: "2",
    },
    {
      question: 'How do you add shadow to elements in CSS?',
      options: [
        "box-shadow: 10px 10px 5px grey;",
        "shadow-color: grey;",
        "shadow-right: 10px shadow-bottom: 10px;",
        "alpha-effect[shadow]: 10px 10px 5px grey;",      
      ],
      rightAnswer: "0",
    },
    {
      question: "How to you modify a border image using CSS?",
      options: [
        "border: url(image.png);",
        "border-image: url(border.png) 30 30 round;",
        "border-variable: image url(image.png);",
        "border-src: image url(image.png);",
      ],
      rightAnswer: "1",
    },
    {
      question: "How to add text shadow using CSS?",
      options: [
        "font: shadowed 5px 5px 5px grey;",
        "font-shadow: 5px 5px 5px grey;",
        "text-shadow: 5px 5px 5px grey;",
        "shadow: text 5px 5px 5px grey;",
      ],
      rightAnswer: "2",
    },
    {
      question: "How to force a word wrap using CSS?",
      options: [
        "text-wrap: force;",
        "word-wrap: break-word;",
        "text-wrap: break-word;",
        "text-width: set;",
      ],
      rightAnswer: "0",
    },
    {
      question: "Which of these are valid CSS transformation statements?",
      options: [
        "modify()",
        "skip()",
        "simulate()",
        "matrix()",
      ],
      rightAnswer: "3",
    },
    {
      question: "How to rotate objects using CSS?",
      options: [
        "object-rotation: 30deg;",
        "rotate-object: 30deg;",
        "transform: rotate(30deg);",
        "transform: rotate-30deg-clockwise;",
      ],
      rightAnswer: "2",
    },
    {
      question: "If you put a value of 0 for a Border-Radius what will happen?",
      options: [
        "The Corner will curve horizontal",      
        "The Corner will be square",
        "The Corner will curve vertical",
        "The world will end",
      ],
      rightAnswer: "1",
    },
    {
      question: "What does the a stand for in RGBa?",
      options: [
        "aqua",
        "apply",
        "about",
        "alpha",
      ],
      rightAnswer: "3",
    },
    {
      question: "What are the first three values of text-shadow in order?",
      options: [
        "vertical, blur, horizontal",
        "horizontal, vertical, blur",
        "blur, vertical, horizontal",
        "vertical, horizontal, blur",
      ],
      rightAnswer: "1",
    },
  ];

  const jsQuestions: any = [
    {
      question: "Which of the following is a server-side Java Script object?",
      options: [
        "Function",
        "File",
        "FileUpload",
        "Date",
      ],
      rightAnswer: "1",
    },
    {
      question: 'To insert a JavaScript into an HTML page, which tag is used?',
      options: [
        "&ltscript= &quotjavascript&quot&gt",
        "&ltjavascript&gt",
        "&ltscript&gt",
        "&ltjs&gt",      
      ],
      rightAnswer: "2",
    },
    {
      question: "Which of the following is used to capture all click events in a window?",
      options: [
        "window.captureEvents(Event.click);",
        "window.routeEvents(Event.click);",
        "window.handleEvents (Event.click);",
        "window.raiseEvents(Event.click);",
      ],
      rightAnswer: "0",
    },
    {
      question: "What language defines the behavior of a web page?",
      options: [
        "HTML",
        "CSS",
        "XML",
        "Java Script",
      ],
      rightAnswer: "3",
    },
    {
      question: "Which of the following function of Number object returns the number's value?",
      options: [
        "toString();",
        "valueOf();",
        "toLocaleString();",
        "toPrecision();",
      ],
      rightAnswer: "1",
    },
    {
      question: "Why so Java and JavaScript have similar name?",
      options: [
        "Java Script is a stripped-down version of Java",
        "The syntax of JavaScript is loosely based on Java syntax",
        "They both support Object Oriented Programming",
        "None of the above",
      ],
      rightAnswer: "1",
    },
    {
      question: "How to append a value to an array of Java Script?",
      options: [
        "arr[arr.length] = value;",
        "arr[arr.length+1] = new Arrays();",
        "arr[arr.length-1] = value;",
        "arr[arr.length*1] = value;",
      ],
      rightAnswer: "0",
    },
    {
      question: "Function is used to parse a String to Int?",
      options: [
        "Integer.Parse",      
        "Parse.Int",
        "Int.Parse",
        "Parse.Integer",
      ],
      rightAnswer: "2",
    },
    {
      question: "A Function associated with an object is called?",
      options: [
        "Function",
        "Link",
        "Array",
        "Method",
      ],
      rightAnswer: "3",
    },
    {
      question: "isNaN() Evaluates and argument to determine if given value?",
      options: [
        "is not a Null",
        "is not a Number",
        "is not a new Object",
        "none of the above",
      ],
      rightAnswer: "1",
    },
  ];



  
  
  
