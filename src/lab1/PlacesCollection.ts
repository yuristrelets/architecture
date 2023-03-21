import { PlacesIterator } from "./PlacesIterator";
import { Collection } from "./types/Collection";

export class PlacesCollection<T> implements Collection<T> {
  private items: T[] = [];

  public getItems() {
    return this.items;
  }

  public getCount() {
    return this.items.length;
  }

  public addItem(item: T) {
    this.items.push(item);
  }

  public createDiscretionIterator() {
    // тут має бути реалізація класу DiscretionIterator
    return new PlacesIterator(this);
  }

  public createNavigatorIterator() {
    // тут має бути реалізація класу NavigatorIterator
    return new PlacesIterator(this);
  }

  public createLocalGuideIterator() {
    // тут має бути реалізація класу LocalGuideIterator
    return new PlacesIterator(this);
  }
}
