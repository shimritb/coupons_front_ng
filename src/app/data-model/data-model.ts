export const usersType = ['admin','company','customer'];

export class User {
  constructor( public email: string, public password: string, userType: string ) { }
}

export class Coupon {
  public id: string;
  public title: string;
  public startDate: string;
  public endDate: string;
  public amount: string;
  public type: string;
  public message: string;
  public price: string;
  public image: string  
}
