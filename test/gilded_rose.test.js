const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  // to test for aged brie
  it("aged brie quality should increase normally if sellIn is above 0", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 30, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(41);
  });

  it("aged brie quality should increase even more if sellIn falls below 0", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(42);
  });

  // to test for backstage passes
  it('back pass quality should increase by 2 when sellIn is 10 days or less', function () {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(42);
  });

  it('back pass quality should increase by 3 when sellIn is 5 days or less', function () {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(43);
  });

  it('backstage pass quality should update to 0 if sellIn is 0', function () {
    const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });
});
