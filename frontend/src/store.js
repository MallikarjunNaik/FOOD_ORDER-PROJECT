// boiler code for store will look like (created by us)
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./reducer/restaurantReducer";
import { menuReducer } from "./reducer/menuReducer";
import { authReducer, forgotPasswordReducer, userReducer } from "./reducer/userReducer";
import { cartReducer } from "./reducer/cartReducer";
import { myOrderReducer, newOrderReducer, orderDetailsReducer } from "./reducer/orderReducer";
import { myOrders } from "./actions/orderAction";
// import { forgotPassword } from "./actions/userAction";

const reducer = combineReducers({
  restaurants: restaurantReducer,
  menus: menuReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrderReducer,
  orderDetails: orderDetailsReducer,
});

const composeenhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(
  reducer,
  composeenhancers(applyMiddleware(...middleware))
);

export default store;
// now after creating this store (by redux)(which we created above) we'll connect it to react using index.js
