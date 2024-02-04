import { MyDatabase } from "./db/my-database";
import { myDatabaseClassic as myDatabaseFromModuleA } from "./module-a";

const myDatabaseClassic = MyDatabase.instance;
myDatabaseClassic.add({ name: "Roberto", age: 30 });
myDatabaseClassic.add({ name: "Joana", age: 50 });
myDatabaseClassic.add({ name: "Luíza", age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
