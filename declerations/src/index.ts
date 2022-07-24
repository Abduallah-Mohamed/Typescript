import axios from "axios";
import _ from "lodash";

console.log(_.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
