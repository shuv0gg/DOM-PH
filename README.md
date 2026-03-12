1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

   Answer:
   getElementById- select element by unique Id name
   getElementsByClassName- select element by unique class name
   querySelector/querySelectorAll- return elements of first match/ return element of all match

2. How do you create and insert a new element into the DOM?

   Answer: let dom = document.createElement('div');
   dom.textContent = "This Assignment is about DOM in JS";
   let parent = document.getElementById("container");
   parent.appendChild(dom);

3. What is Event Bubbling? And how does it work?

   Answer: It means-When an event starts on the target element and then circulates upward to its parent elements in the DOM (Button>DIV>BODY)

4. What is Event Delegation in JavaScript? Why is it useful?

   Answer: Event Delegation is a method where we place a single event listener on a parent element and use it to handle events from its child elements. This makes the code cleaner, reduces the number of event listeners, and also works well for elements that are added to the page later.

5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer: preventDefault()= Stops the browser’s default behavior
   stopPropagation()= stops the event from moving up to parent elements in DOM.
