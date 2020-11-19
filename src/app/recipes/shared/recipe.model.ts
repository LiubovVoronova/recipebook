export interface Recipe {
  id: number,
  title: string,
  category: string,
  area: string,
  description: string,
  image: string,
  ingredients: Ingredient[]
}

export interface Ingredient {
  name: string,
  measure: string
}
