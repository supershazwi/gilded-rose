class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
    this.valueIncreaseItemNames = ['Aged Brie'];
    this.expireItemNames = ['Backstage passes to a TAFKAL80ETC concert'];
    this.legendaryItemNames = ['Sulfuras, Hand of Ragnaros'];
    this.conjuredItemNames = ['Conjured Item'];
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.legendaryItemNames.includes(this.items[i].name)) {
        break;
      }

      this.updateSellIn(this.items[i]);

      if (this.expireItemNames.includes(this.items[i].name)) {
        this.updateExpireItemQuality(this.items[i]);
      } else if (this.valueIncreaseItemNames.includes(this.items[i].name)) {
        this.updateValueIncreaseItemQuality(this.items[i]);
      } else if (this.conjuredItemNames.includes(this.items[i].name)) {
        this.updateConjuredItemQuality(this.items[i]);
      } else {
        this.updateNormalItemQuality(this.items[i]);
      }
    }

    return this.items;
  }

  updateSellIn(item) {
    item.sellIn -= 1;
  }

  updateValueIncreaseItemQuality(item) {
    switch (true) {
      case item.sellIn < 0:
        item.quality += 2;
        break;
      default:
        item.quality += 1;
    }
  }

  updateExpireItemQuality(item) {
    switch (true) {
      case item.sellIn < 0:
        item.quality = 0;
        break;
      case item.sellIn <= 5:
        item.quality += 3;
        break;
      case item.sellIn <= 10:
        item.quality += 2;
        break;
      default:
        item.quality += 1;
    }
  }

  updateNormalItemQuality(item) {
    switch (true) {
      case item.sellIn < 0:
        item.quality -= 2;
        break;
      default:
        item.quality -= 1;
    }
  }

  updateConjuredItemQuality(item) {
    switch (true) {
      case item.sellIn < 0:
        item.quality -= 4;
        break;
      default:
        item.quality -= 2;
    }
  }
}

module.exports = {
  Item,
  Shop
}
