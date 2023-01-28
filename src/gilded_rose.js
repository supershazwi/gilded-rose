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
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].updateSellIn();
      this.items[i].updateQuality();
    }

    return this.items;
  }
}

class ValueIncreaseItem extends Item {
  updateSellIn() {
    this.sellIn -= 1;
  }
  
  updateQuality() {
    switch (true) {
      case this.sellIn < 0:
        this.quality += 2;
        break;
      default:
        this.quality += 1;
    }
  }
}

class ExpireItem extends Item {
  updateSellIn() {
    this.sellIn -= 1;
  }

  updateQuality() {
    switch (true) {
      case this.sellIn < 0:
        this.quality = 0;
        break;
      case this.sellIn <= 5:
        this.quality += 3;
        break;
      case this.sellIn <= 10:
        this.quality += 2;
        break;
      default:
        this.quality += 1;
    }
  }
}

class NormalItem extends Item {
  updateSellIn() {
    this.sellIn -= 1;
  }

  updateQuality() {
    switch (true) {
      case this.sellIn < 0:
        this.quality -= 2;
        break;
      default:
        this.quality -= 1;
    }
  }
}

class ConjuredItem extends Item {
  updateSellIn() {
    this.sellIn -= 1;
  }

  updateQuality() {
    switch (true) {
      case this.sellIn < 0:
        this.quality -= 4;
        break;
      default:
        this.quality -= 2;
    }
  }
}

class LegendaryItem extends Item {
  updateSellIn() {
  }

  updateQuality() {
  }
}

module.exports = {
  Item,
  ValueIncreaseItem,
  ExpireItem,
  NormalItem,
  ConjuredItem,
  LegendaryItem,
  Shop
}
