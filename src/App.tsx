import {RouterProvider} from "react-router-dom";
import {store, StoreContext} from "./store";
import {router} from "./pages";

export const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  )
}