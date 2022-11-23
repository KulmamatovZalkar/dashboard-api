// let a: number = 5;
// let b: string = "4";

// let c: number = a + +b;
// console.log(c);
// let d = true;

// let names: string[] = ["string", 'jdsfk']
// let numbers: number[] = [4, 5]

// let tup: [number, string] = [2, "dkjsfjk"]

// let e: any = 3;

// function greet(name: string): string{
//     return name + 'Hi'
// }

// names.map((x: string) => x)

// function coord(coord: {lat: number, lon?: number}){

// }

// let universalId: number | string = 5;
// universalId = "string";

// function printId(id: number | string){
//     if(typeof id == 'string'){
//         console.log(id.toUpperCase())
//     }
//     console.log(id)
// }

// function helloUser(user: string | string[]){
//     if(Array.isArray(user)){
//         user.join()
//     }else{
//         console.log(user + "Hi")
//     }
// }

// type coord = { lat: number; lon?: number };

// interface ICoord {
//   lat: number;
//   lon?: number;
// }

// type ID = string | number;

// function coord(coord: ICoord) {}

// interface Animal {
//   name: string;
// }
// interface Dog extends Animal {
//   tail?: boolean;
// }

// const dog: Dog = {
//   name: "Rex",
//   tail: true,
// };

// type Animal = {
//     name: string;
// }

// type Dog = Animal & {
//     tail: boolean;
// }

// const dog:Dog = {
//     name: '',
//     tail: true
// }

// interface Dog {
//   name: string;
// }

// interface Dog {
//   tail: boolean;
// }

// const dog: Dog = {
//   name: "Rex",
//   tail: true,
// };

// const a = "Rex";
// let b: "hi" = "hi";

// type direction = "left" | "right";

// function moveDog(direction: direction): -1 | 0 | 1 {
//     switch(direction){
//         case 'left':
//             return -1;
//         case 'right':
//             return 1;
//         default:
//             return 0;
//     }
// }

// moveDog('left')
// moveDog('right')

// interface IConnection{
//     host: string;
//     port: number;
// }

// function connect(connecttion: IConnection | "default"){

// }

// connect("default")

// const connection = {
//     host: "localhost",
//     protocol: 'https' as 'https'
// }

// let a: any = 5;
// let c = <number>a;
// let d = a as number;

// function connect(host: string, protocol: "http" | "https"){

// }

// connect(connection.host, connection.protocol)

type direction = "left" | "right";

// enum Direction{
//     Left = 2,
//     Right = "right"
// }

// enum Direction{
//     Left = "jfsj".length,
//     Right = 1
// }

// enum Direction {
//   Left,
//   Right,
// }

// // Direction.Left

// function move(direction: Direction) {
//   switch (direction) {
//     case Direction.Left:
//       return -1;
//     case Direction.Right:
//       return 1;
//   }
// }

// function objMod(obj: { Left: number }) {

// }

// function log<T>(obj: T): T{
//     console.log(obj);
//     return obj;
// }

// log<string>("sfds")
// log<number>(12)

// interface HasLength{
//     length: number;
// }

// function log<T extends HasLength, K>(obj: T, arr: K[]): K[] {
//   console.log(obj);
//   return arr;
// }

// log<string, number>("sfds", [23]);

// interface IUser{
//     name: string;
//     age?: number;
//     bid: (sum: number) => boolean;
// }

// function bid(sum: number): boolean{
//     return true;
// }

// class Coord {
//   lat: number;
//   long: number;

//   constructor(lat: number, long: number) {
//     this.lat = lat;
//     this.long = long;
//   }
// }

// const point = new Coord(0, 1);


