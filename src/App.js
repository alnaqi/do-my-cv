import Root from "pages/Root";
import MainRoot from "pages/MainRoot";
import Home from "pages/Home/Home";
import Resume from "pages/Create/Resume";
import Contact from "pages/Contact/Contact";
import NotFound from "pages/NotFound/NotFound";

import Templates from "pages/templates/Templates";
import TheOpenSeaPage from "pages/templates/TheOpenSea/TheOpenSeaPage";
import ClassicPage from "pages/templates/Classic/ClassicPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
// @ts-ignore
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="main" element={<MainRoot />}>
        <Route index element={<Home />} />
        <Route path="create" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="templates" element={<Templates />}>
        <Route path="the_open_sea" element={<TheOpenSeaPage />} />
        <Route path="classic" element={<ClassicPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
