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
import Registration from "pages/Auths/Registration";

// Test
import Test from "pages/Test/Test";
import Do_It from "pages/Test/Do_It";
import Profile from "pages/Profile/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="main" element={<MainRoot />}>
        <Route index element={<Home />} />
        <Route path="create" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="registration" element={<Registration />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="templates" element={<Templates />}>
        <Route path="the_open_sea" element={<TheOpenSeaPage />} />
        <Route path="classic" element={<ClassicPage />} />
      </Route>

      <Route path="test" element={<Test />}>
        <Route path="do-it" element={<Do_It />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
