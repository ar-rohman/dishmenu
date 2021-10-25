const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('Showing empty favorited restaurant', ({ I }) => {
    I.see('Favorited Restaurant', '.pt-5');
    I.see('No data available', '#restaurant');
});

Scenario('Favorite first restaurant', async ({ I }) => {
    I.see('No data available', '#restaurant');
    I.amOnPage('/');
    I.seeElement('restaurant-list');
    const firstRestaurant = locate('restaurant-list .title').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurantName);
    I.seeElement('favorite-btn #favorite-this');
    I.click('#favorite-this');
    I.amOnPage('/#/favorite');
    I.seeElement('restaurant-list');
    const favoriteRestaurantName = await I.grabTextFrom('restaurant-list .title');
    assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
});
