export type FoodItemProps = {
  id?: number;
  title: string;
  imageUrl: string;
  description: string;
  categories?: { id?: number; name: string }[]; // Assuming each category has an id and name
  userId: string;
  ingredients: {
    id?: number;
    name: string;
    quantity: string;
    recipeId?: number;
  }[];
  instructions: {
    id?: number;
    step: string;
    recipeId?: number;
  }[];
  tags?: { id?: number; name: string }[]; // Assuming each tag has an id and name
  cuisineTypes?: { name: string }[];
  seasonalEvent?: { name: string }[];
  specialDiets?: { name: string }[];
};
