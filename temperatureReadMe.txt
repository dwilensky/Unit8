Question 3a: Beyond the HTML tags, does anything else need to change? 
Answer: No, aside from removing the original input elements and the JavaScript code is unchanged.

Question 3b: Can you think of a functional difference between the two button creating elements?
Answer: for aesthetic reasons, one might chose to stay with the traditional 'input type = "button"' 
element, especially if coding a block of various input types. A critical reason not to use this 
element is that it is treated differently by different browsers: some versions of IE submit the 
text between the <button>,  </button> tags, while other browsers will submit the content of the 
value attribute. 