Feature('Unfavorite Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('Unfavorite restaurant that has been favorited', async ({ I }) => {
    I.see('No data available', '#restaurant');
    I.amOnPage('/');
    I.seeElement('restaurant-list');
    const firstRestaurant = locate('restaurant-list a').first();
    I.click(firstRestaurant);
    I.seeElement('favorite-btn #favorite-this');
    I.click('#favorite-this');
    I.amOnPage('/#/favorite');
    I.seeElement('restaurant-list');
    I.click(firstRestaurant);
    I.seeElement('favorited-btn #unfavorite');
    I.click('#unfavorite');
    I.amOnPage('/#/favorite');
    I.see('No data available', '#restaurant');
});
