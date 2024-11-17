

export type MiscType = {
  miscId: number,
  quantity: number
};
export type PizzaType = {
  name: string,
  sauceId: number,
  doughId: number,
  sizeId: number,
  quantity: number,
  ingredients: [
    {
      ingredientId: number,
      quantity: number
    }
  ]
};
export type AddressType = {
  street: string,
  building: string,
  flat: string,
  comment: string,
};

export type OrderType = 
{
  userId: string,
  phone: string,
  address: AddressType[],
  pizzas: PizzaType[],
  misc: MiscType[]
}

export type LoginType = {
  email: string,
  password: string
}