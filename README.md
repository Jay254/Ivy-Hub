# Ivy-Hub

PROJECT NAME: IVY HUB

PROJECT DESCRIPTION: Ivy hub is a webpage that students can use to plan their applications to Ivy-league Institutions in the United States. The Ivy Leagues are ONLY eight in number; Harvard University, University of Pennsylvania, Yale University, Princeton University, Brown University, Dartmouth College, Columbia University, and Cornell University. This limits our college list to a maximum of eight colleges. The users can enter their preferred college, the cycle they would like to apply for, and any plans they have in store, and the same gets added to our list.

PROJECT SETUP: This project uses a json server API to supply our front-end with the required data. I had four files; index.html, db.json, style.css, and index.js. Here are the details for each:

        <>index.html: I build a form that takes in 3 inputs; College name, application cycle, and application plans.
        1. College Names accepted => Harvard/Yale/Upenn/Princeton/Dartmouth/Brown/Cornell/Columbia. The program will deny any others, even a first lower case letter, or just an additional word afterwards e.g Harvard University.
        2. Application cycle => The program will take in any input but the relevant inputs should be, but not limited to, Early Decision, Early Action, Restrictive Early Action, and Regular Decision.
        3. Application Plans => The program will take in any input eg. Practice for SATs, Take English Proficiency Test, Improve GPA etc
        I added a 'required' attribute on all input fields.
        I also added a div with a class of 'cover' which will hold our college cards.

        JS index.js: This initiates a DOMContentLoaded event listener that fires up when the HTML document is completely loaded and parsed. Inside it, I first grabbed elements from the DOM and stored  them in variable names. I then declared a new empty set called 'addedColleges'. I added two event listeners: one for when the form is submitted, and one for when the cover element is clicked. The handleSubmit function is called when the form is submitted. It takes an event object as a parameter and prevents the default behavior of the form, which is to reload the page. The code checks whether the value of the collegeName input field  has already been added to the addColleges set. If it has, it returns an alert message to the user. If not, a GET request is sent to the JSON server, with the college name as the path parameter. The response from the server is converted to JSON and the data is extracted and used dynamically to generate HTML code that is added to our cover element. The HTML code includes an image, college name, location, acceptance rate, website link, application round, application plan, and a button to remove the college from the list. Finally the college name is added to the addedColleges set. The handleRemove function is called when the cover element is clicked. Itt takes an event object as parameter and checks if the clicked element has a class of 'Btn'. If it does, the closest parent element with a class of 'box' is removed from the DOM, and the college name is retrieved from the removed element's image alt attribute. the college name is then removed from the addedColleges set.

        #style.css => Contains the relevant styles to out HTML elements.

        {}db.json => Contains information about the Ivy leagues institutions, and serves as our local server during the fetch requests made in our index.js file.

GITHUB REPOSITORY LINK: https://github.com/Jay254/Ivy-Hub

AUTHOR: Yegon Japheth Kiptoo -name
        Jay254 - Github Username





