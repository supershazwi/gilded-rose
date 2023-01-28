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
  }

  updateQuality() {
    const valueIncreaseItemNames = ['Aged Brie'];
    const expireItemNames = ['Backstage passes to a TAFKAL80ETC concert'];
    const legendaryItemNames = ['Sulfuras, Hand of Ragnaros'];
    const conjuredItemNames = ['Conjured Item'];

    for (let i = 0; i < this.items.length; i++) {
      if (legendaryItemNames.indexOf(this.items[i].name) === -1) {
        this.updateSellIn(this.items[i]);
      }

      if (expireItemNames.indexOf(this.items[i].name) !== -1) {
        this.updateExpireItemQuality(this.items[i]);
      } else if (valueIncreaseItemNames.indexOf(this.items[i].name) !== -1) {
        this.updateValueIncreaseItemQuality(this.items[i]);
      } else if (conjuredItemNames.indexOf(this.items[i].name) !== -1) {
        this.updateConjuredItemQuality(this.items[i]);
      } else if (legendaryItemNames.indexOf(this.items[i].name) === -1) {
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
