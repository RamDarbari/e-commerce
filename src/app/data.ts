export interface signUp {
    userName: string;
    emailAddress: string;
    phoneNumber: number
    password: string;
    confirmPassword: string;

}

export interface login {
    // username: string;
    emailAddress: string;
    password: number;
    // passsword2:number;  


}

export interface admin {
    name: string
}

export interface product {
    name: string;
    brand: string;
    category_id: string
    description: string;
    price: string;
    quantity: number;
    image: string,
    _id: string
    subCategoryName: string
    url: string
    subCategoryId: string;
}


export interface category {
    // id: string;
    category: string;
    categoryName: string;
    url: string
    _id: string
    // subcategories?: subCategory[];
}

export interface product1 {
    // _id: string;
    categoryId: string;
    url: string
    subCategoryName: string;
    _id: string
}

export interface cartItemList {
    name: string;
    description: string
    price: number;
    quantity: number;
    _id: string;
    items: {
      name: string;
      price: number;
      image: string
    };
    bill: number;
  }
  

export interface cart{
    // quantity: number;
 
}