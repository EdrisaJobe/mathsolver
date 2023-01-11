# About Math Solver
This web application was intended for students when solving particular math problems, as a student I had a hard time memorizing some concepts from classes especially math related ones so I decided to make an app that allows me to calculate with ease. After working on the app I got a better understanding as to how to display content dynamically onto a page and displaying constant updates after each input submission. Using this app really helped me understand the concepts thought in class as I had to dully understand each equation in order to implement them.

[![Link - Math Solver](https://img.shields.io/badge/Link-Math_Solver-3693F3?style=for-the-badge&logo=<svg+role%3D"img"+viewBox%3D"0+0+24+24"+xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"><title>iCloud<%2Ftitle><path+d%3D"M13.762+4.29a6.51+6.51+0+0+0-5.669+3.332+3.571+3.571+0+0+0-1.558-.36+3.571+3.571+0+0+0-3.516+3A4.918+4.918+0+0+0+0+14.796a4.918+4.918+0+0+0+4.92+4.914+4.93+4.93+0+0+0+.617-.045h14.42c2.305-.272+4.041-2.258+4.043-4.589v-.009a4.594+4.594+0+0+0-3.727-4.508+6.51+6.51+0+0+0-6.511-6.27z"%2F><%2Fsvg>)](https://mathsolver-app.herokuapp.com/)
## Technology Used :hammer_and_wrench:

Frontend :gear:| Description|
-------|------------|
ReactJS | Used to display components from within the HTML page, handled both frontend and backend design when implementing the proper logic as to how to display the content.
CSS    | Everything within the pages were styled using CSS, the design again is very minimilistic but clean and easy to use. Also, used it as a way to make it responsive to phones and other devices.
Bootstrap| Visual aspects such as the textfield and button elements, component designs.
HTML   | Stores all the pages, used alongside React to make the dynamic components needed in order for the user to input data.

Backend :toolbox:| Description|
-------|------------|
JavaScript | All the script was written in JavaScript alongside React for backend implementation primarily functions regarding the logic for each equation how it is displayed on the HTML.
Firebase | Used Firebase to save save user input within the database which can then be retrieved thus being able to see the dynamic changes in real time. The database can also be resetted upon a refresh from the page therefore no information is being saved.

Libraries :books:| Description|
-------|------------|
React Helmet| This reusable React component will manage all of your changes to the document head. Helmet takes plain HTML tags and outputs plain HTML tags.
React Hook Form | Helped to validate all the forms in the React app acting as CSRF token to prevent malicious input injections. It is a minimal library without any other dependencies, while being performant and straightforward to use.

Web-services :spider_web:| Description|
-------|------------|
Heroku | Heroku is a cloud platform for hosting and maintaining website information which I used to later connect the platform with GoDaddy. 
GoDaddy| Domain was registered from GoDaddy alongside all DNS setup.

# Visual Example
<img width="1674" alt="Screen Shot 2023-01-11 at 2 33 49 PM" src="https://user-images.githubusercontent.com/48189579/211901009-a43736dc-0164-4f25-9137-77cdd821dd94.png">

<img width="1674" alt="Screen Shot 2023-01-11 at 2 34 12 PM" src="https://user-images.githubusercontent.com/48189579/211901039-1e141d0c-414b-4d22-861c-3ccdaad49dc1.png">

<img width="1674" alt="Screen Shot 2023-01-11 at 2 34 21 PM" src="https://user-images.githubusercontent.com/48189579/211901120-5fbaf7d1-7432-4bcc-bbc5-a9d2d9226f3d.png">


