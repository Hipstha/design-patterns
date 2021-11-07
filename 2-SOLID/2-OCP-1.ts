class Order {

  private lineItems: any;
  private shipping: any;

  public getTotal(): any { }

  public getTotalWeight(): any { }

  public setShippingType(st: any): any { }

  public getShippingCost(): any {

    switch( this.shipping ) {
      case 'ground': {
        if( this.getTotal() > 100 ) {
          return 0
        }
        return this.getTotalWeight() * 1.5;
      }
      case 'air': {
        return this.getTotalWeight() * 3;
      }
    }

  }

  public getShippingDate(): any { }

}