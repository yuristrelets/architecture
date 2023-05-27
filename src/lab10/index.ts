import { Form } from "./lib/Form";
import { Input } from "./lib/Input";
import { Fieldset } from "./lib/Fieldset";
import { Select } from "./lib/Select";

const loginForm = new Form("/login", "POST");
loginForm.add(new Input("email", "email"));
loginForm.add(new Input("password", "password"));
loginForm.add(new Input("submit", "submit"));

console.log(loginForm.render());
// <form method="post" action="/login">
// <input type="email" name="email" />
// <input type="password" name="password" />
// <input type="submit" name="submit" />
// </form>

const registerForm = new Form("/register", "POST");
registerForm.add(new Input("email", "email"));
registerForm.add(new Input("password", "password"));
registerForm.add(new Input("password", "repeat-password"));

const userInfo = new Fieldset("Additional information");
userInfo.add(new Select("country", ["Ukraine", "Poland", "USA"]));
userInfo.add(new Input("text", "address"));

registerForm.add(userInfo);
registerForm.add(new Input("submit", "submit"));

console.log(registerForm.render());
// <form method="post" action="/register">
// <input type="email" name="email" />
// <input type="password" name="password" />
// <input type="password" name="repeat-password" />
// <fieldset>
// <legend>Additional information</legend>
// <select name="country">
// <option value="Ukraine">Ukraine</option>
// <option value="Poland">Poland</option>
// <option value="USA">USA</option>
// </select>
// <input type="text" name="address" />
// </fieldset>
// <input type="submit" name="submit" />
// </form>
