import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealComposite } from "./meal-composite";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealComposite = new MealComposite();

  public get meal(): MealComposite {
    return this._meal;
  }

  public get price(): number {
    return this._meal.getPrice();
  }

  reset(): this {
    this._meal = new MealComposite();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice("Rice", 5);
    const beans = new Beans("Beans", 10);
    const meat = new Meat("Meat", 20);
    this._meal.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const meat = new Beverage("Meat", 20);
    this._meal.add(meat);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert("Dessert", 10);
    this._meal.add(dessert);
    return this;
  }
}
