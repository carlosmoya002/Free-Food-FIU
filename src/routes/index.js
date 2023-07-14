import { createBrowserRouter } from "react-router-dom";
import EventCreation from "../pages/EventCreation";
import SavedEvents from "../pages/SavedEvents";





const router = createBrowserRouter([
  { path: "/", element: <EventCreation /> },
  { path: "/saved-events", element: <SavedEvents /> }
]);

export default router;