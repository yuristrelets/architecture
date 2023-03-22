import { PlacesCollection } from "./PlacesCollection";

const collection = new PlacesCollection();
collection.addItem("Kharkiv");
collection.addItem("Poltava");
collection.addItem("Kyiv");
collection.addItem("Zhytomyr");
collection.addItem("Rivne");
collection.addItem("Lviv");

const iterators = [
  collection.createDiscretionIterator(),
  collection.createNavigatorIterator(),
  collection.createLocalGuideIterator(),
];

iterators.forEach((iterator) => {
  console.log(">", iterator.constructor.name);

  while (iterator.valid()) {
    console.log(iterator.next());
  }

  console.log("");
});
