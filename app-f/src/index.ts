import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const map = new CustomMap("map");
// map.addUserMarker(user);
// map.addUserMarker(company);

map.addMarker(user);
map.addMarker(company);
