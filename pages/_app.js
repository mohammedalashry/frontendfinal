import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cookies from "../components/Cookies";
import aboutReducer from "../redux/4reducers/aboutReducer";
import projectsReducer from "../redux/4reducers/projectsReducer";
import socialReducer from "../redux/4reducers/socialReducers";
import contactUsReducer from "../redux/4reducers/contactUsReduer";
import RDReducer from "../redux/4reducers/RequestDemoReducers";
import SmartParkingReducer from "../redux/4reducers/SmartParkingReducers";
import SmartConnectReducer from "../redux/4reducers/SmartConnectReducers";
import SupportReducer from "../redux/4reducers/SupportReducers";
import landingReducer from "../redux/4reducers/landingReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  landing: landingReducer,
  about: aboutReducer,
  projects: projectsReducer,
  links: socialReducer,
  contact: contactUsReducer,
  RD: RDReducer,
  smartParking: SmartParkingReducer,
  smartConnect: SmartConnectReducer,
  support: SupportReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Cookies />
    </Provider>
  );
}
export default MyApp;
