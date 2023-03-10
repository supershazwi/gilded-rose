const {Shop, Item, ValueIncreaseItem, ExpireItem, NormalItem, ConjuredItem, LegendaryItem} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new NormalItem("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  // to test for aged brie
  it("aged brie quality should increase normally if sellIn is above 0", function() {
    const gildedRose = new Shop([new ValueIncreaseItem("Aged Brie", 30, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(41);
  });

  it("aged brie quality should increase even more if sellIn falls below 0", function() {
    const gildedRose = new Shop([new ValueIncreaseItem("Aged Brie", 0, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(42);
  });

  // to test for backstage passes
  it('back pass quality should increase by 1 when sellIn is above 10 days', function () {
    const gildedRose = new Shop([new ExpireItem('Backstage passes to a TAFKAL80ETC concert', 12, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(41);
  });

  it('back pass quality should increase by 2 when sellIn is 10 days or less', function () {
    const gildedRose = new Shop([new ExpireItem('Backstage passes to a TAFKAL80ETC concert', 10, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(42);
  });

  it('back pass quality should increase by 3 when sellIn is 5 days or less', function () {
    const gildedRose = new Shop([new ExpireItem('Backstage passes to a TAFKAL80ETC concert', 5, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(43);
  });

  it('backstage pass quality should update to 0 if sellIn is 0', function () {
    const gildedRose = new Shop([new ExpireItem('Backstage passes to a TAFKAL80ETC concert', 0, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(0);
  });

  // to test for sulfuras
  it("sulfuras' quality should not alter", function() {
    const gildedRose = new Shop([new LegendaryItem("Sulfuras, Hand of Ragnaros", 10, 80)]);
    const items = gildedRose.updateQuality();
    
    expect(items[0].quality).toBe(80);
  });

  it("sulfuras' quality should not alter if sellIn < 0", function() {
    const gildedRose = new Shop([new LegendaryItem("Sulfuras, Hand of Ragnaros", -1, 80)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(80);
  });

  // to test for conjured items
  it("conjured item quality should decrease normally if sellIn is above 0", function() {
    const gildedRose = new Shop([new ConjuredItem("Conjured Item", 10, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(38);
  });

  it("conjured item quality should decrease twice faster if sellIn is below 0", function() {
    const gildedRose = new Shop([new ConjuredItem("Conjured Item", 0, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(36);
  });

  // to test for items that are not aged brie, backstage passes or sulfuras
  it("normal item quality should decrease normally if sellIn is above 0", function() {
    const gildedRose = new Shop([new NormalItem("Normal Item", 10, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(39);
  });

  it("normal item quality should decrease even more if sellIn falls below 0", function() {
    const gildedRose = new Shop([new NormalItem("Normal Item", 0, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(38);
  });
});
