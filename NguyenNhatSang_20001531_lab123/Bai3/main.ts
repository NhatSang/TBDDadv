import { HinhTron } from "./HinhTron";
import { ToaDo } from "./ToaDo";

let t = new ToaDo({ten:'O',x:5,y:5});
let o = new HinhTron({tam:t,banKinh:10.5});
console.log(o.toString());

