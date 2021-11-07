class Order2 {
 
  constructor(shipping: Shipping, lineItems?: any, ) {
    this.lineItems = lineItems;
    this.shipping = shipping;
  }

  private lineItems: any;
  private shipping: Shipping;

  public getTotal(): any { }

  public getTotalWeight(): any { }

  public setShippingType(st: any): any { }

  public getShippingCost(): any {
    return this.shipping.getCost(this);
  }

  public getShippingDate(): any { }

}

interface Shipping {
  getCost(order: any): any;
  getDate(order: any): any;
}

class Ground implements Shipping {
  public getCost( order: Order2) {
    if( order.getTotal() > 100 ) {
      return 0
    }
    return order.getTotalWeight() * 1.5;
  }
  public getDate( order: any) { }
}

class Air implements Shipping {
  public getCost( order: Order2) {
    if( order.getTotal() > 100 ) {
      return 0
    }
    return order.getTotalWeight() * 3;
  }
  public getDate( order: any) { }
}

// new element
class Water implements Shipping {
  public getCost( order: Order2) {
    if( order.getTotal() > 100 ) {
      return 0
    }
    return order.getTotalWeight() * 5;
  }
  public getDate( order: any) { }
}
