import { Iterator } from "./types/Iterator";
import { Collection } from "./types/Collection";

export class PlacesIterator<T> implements Iterator<T> {
  private position = 0;

  constructor(private collection: Collection<T>) {}

  public rewind() {
    this.position = 0;
  }

  public current() {
    return this.collection.getItems()[this.position];
  }

  public key() {
    return this.position;
  }

  public next() {
    const item = this.collection.getItems()[this.position];
    this.position++;

    return item;
  }

  public valid() {
    return this.position < this.collection.getCount();
  }
}
