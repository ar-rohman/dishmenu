const assert = require('assert');

Feature('Write Review For Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/list');
});

Scenario('Adding review to restaurant', async ({ I }) => {
    I.see('Explore Restaurant', 'h2');
    I.seeElement('restaurant-list');
    const secoundRestaurant = locate('.title').inside('restaurant-list').at(2);
    const restaurantName = await I.grabTextFrom(secoundRestaurant);
    I.click(secoundRestaurant);
    I.seeElement('restaurant-detail');
    const addReview = locate('a').inside('.add-review-btn');
    I.click(addReview);
    I.seeElement('add-review');
    I.see(`Write your review about ${restaurantName} restaurant`, '.title');
    const now = new Date().getTime();
    const name = `My Name ${now}`;
    const content = `My review ${now}`;
    I.fillField('#restaurant-name', name);
    I.fillField('#restaurant-review', content);
    I.click('Save');
    I.seeElement('review-list');
    const myReviewNameElment = locate('.reviewer').inside('review-list').last();
    const myReviewName = await I.grabTextFrom(myReviewNameElment);
    const myReviewContentElment = locate('p').inside('review-list').last();
    const myReviewContent = await I.grabTextFrom(myReviewContentElment);
    assert.strictEqual(name, myReviewName);
    assert.strictEqual(content, myReviewContent);
});
