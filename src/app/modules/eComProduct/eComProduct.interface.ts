import { Schema, model, connect } from 'mongoose';
export type Variant = {
  type: string;
  value: string;
};

export type Inventory = {
  quantity: number;
  inStock: boolean;
};

export type EProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tag: string[];
  variant: Variant;
  inventory: [Inventory];
};
