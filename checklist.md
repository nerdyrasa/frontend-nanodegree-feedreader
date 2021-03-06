# Project Checklist

- [x] 1. Take the JavaScript Testing course
- [x] 2  Download the required project assets.
- [x] 3. Review the functionality of the application within your browser.
- [x] 4. Explore the application's HTML (./index.html), CSS (./css/style.css) and JavaScript (./js/app.js) to gain an understanding of how it works.
- [x] 5. Explore the Jasmine spec file in ./jasmine/spec/feedreader.js and review the Jasmine documentation.
- [x] 6. Edit the allFeeds variable in ./js/app.js to make the provided test fail and see how Jasmine visualizes this failure in your application.
- No variable names allFeeds:
ReferenceError: allFeeds is not defined
- Declare a variable allFeeds but not assigning it a value:
Error: Expected undefined to be defined.
TypeError: Cannot read property 'length' of undefined
- Declare a variable allFeeds assign value of null to it:
TypeError: Cannot read property 'length' of null
- Declare a variable allFeeds and assign an empty array to it:
Expected 0 not to be 0.
- [x] 7. Return the allFeeds variable to a passing state.
- [x] 8. Write a test that loops through each feed in the allFeeds object and ens]res it has a URL defined and that the URL is not empty.
- [x] 9. Write a test that loops through each feed in the allFeeds object and ens]res it a a name defined and that the name is not empty.
- [x] 10. Write a new test suite named "The menu".
- [x] 11. Write a test that ensures the menu element is hidden by default. You'll have to anal]ze the HTML and the CSS to determine how we're performing the hid]ng/showing of the menu element.
- [x] 12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
- [x] 13. Write a test suite named "Initial Entries".
- [x] 14. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
- [x] 15. Write a test suite named "New Feed Selection".
- [x] 16. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
- [x] 17. No test should be dependent on the results of another.
- [x] 18. Callbacks should be used to ensure that feeds are loaded before they are tested.
- [x] 19. Implement error handling for undefined variables and out-of-bound array access.
- [x] 20. When complete - all of your tests should pass.
- [x] 21. Write a README file detailing all steps required to successfully run the application. 
- [ ] 22. TODO: Write additional tests (for Udacious Test Coverage). Provide documentation for what these future features are and what the tests are checking for.
