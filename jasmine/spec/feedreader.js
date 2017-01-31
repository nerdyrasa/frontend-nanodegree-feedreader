/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This test suite checks that allFeeds, allFeeds.url and
       allFeeds.name are all defined.
    */
    describe('RSS Feeds', function() {
        /* This test verifies that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('allFeeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url is defined', function() {
            allFeeds.forEach(function(element) {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            });
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name is defined', function() {
            allFeeds.forEach(function(element) {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function() {

        /* This test ensures that the menu element is
         * hidden by default.
         */

        /* The menu is hidden if it has the class menu-hidden.
         */
        it('is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* This test ensures that the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('menu changes on click', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Note that loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('should be loaded', function(done) {
            expect($('.entry').length).toBeGreaterThan(0);
            done();
        });
    });


    describe('New Feed Selection', function() {

        /* This test ensures that when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Note that loadFeed() is asynchronous.
         */

        // Test setup loads a feed which is the "old" feed.
        var oldFeedHref = null,
            newFeedHref = null;

        // Setup:
        // Select the feed with index 0 to be the oldFeed to get the href for comparison.
        beforeEach(function(done) {
            loadFeed(0, function() {
                oldFeedHref = $('.entry-link').first().attr('href');
                done();
            });
        });

        it('Should change the content', function(done) {
            // Select feed with index 1 to be the newFeed. Compare the href values of the new and old feeds.
            // The test passes if the href values are not equal.
            loadFeed(1, function() {
                newFeedHref = $('.entry-link').first().attr('href');
                expect(oldFeedHref).not.toEqual(newFeedHref);
                done();
            });

            // Uncomment the following to get a failing test.
            //loadFeed(0, function() {
            //    newFeedHref = $('.entry-link').first().attr('href');
            //    console.log('new ', newFeedHref);
            //    expect(oldFeed).not.toEqual(newFeed);
            //    done();
            //});
        });
    });
}());
