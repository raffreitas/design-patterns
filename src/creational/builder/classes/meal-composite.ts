import { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class MealComposite implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: MealCompositeProtocol[]): void {
    for (const item of meal) {
      this._children.push(item);
    }
  }
}
