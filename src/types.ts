export interface ICustomer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export interface IOrder {
  id: string;
  customer: { id: string; firstName: string; lastName: string };
  status: { id: string; name: string };
  date: string;
  price: string;
  amount: string;
}

export interface IPermission {
  id: string;
  name: string;
  resource: { id: string; name: string };
  permissionType: "read" | "write" | "delete" | "update";
}

export interface IProduct {
  id: string;
  name: string;
  category: { id: string; name: string };
  price: string;
}

export interface IResponsePage<T> {
  contents: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface IRole {
  id: string;
  name: string;
  description: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: { id: string; name: string };
}
