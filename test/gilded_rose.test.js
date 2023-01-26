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

  // to test for items that are not aged brie, backstage passes or sulfuras
  it("normal item quality should decrease normally if sellIn is above 0", function() {
    const gildedRose = new Shop([new Item("Normal Item", 10, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(39);
  });

  it("normal item quality should decrease even more if sellIn falls below 0", function() {
    const gildedRose = new Shop([new Item("Normal Item", 0, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(38);
  });
});
