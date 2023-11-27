import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Error from "../Components/Error";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Trainer from "../Pages/Trainer/Trainer";
import DashboardLayout from "../Layouts/DashboardLayout";
import Gallery from "../Pages/Gallery/Gallery";
import Classes from "../Pages/Classes/Classes";
import TrainerDetails from "../Pages/Trainer/TrainerDetails";
import BeTrainer from "../Pages/Trainer/BeTrainer";
import Pricing from "../Pages/Trainer/Pricing";
import PrivateRoute from "./PrivateRoute";
import ManageSlots from "../Dashboard/Trainer/ManageSlots";
import ManageMember from "../Dashboard/Trainer/ManageMember";
import AddNewForum from "../Dashboard/Trainer/AddNewForum";
import AddNewClasses from "../Dashboard/Trainer/AddNewClasses";
import ActivityLog from "../Dashboard/Members/ActivityLog";
import RecommendedClasses from "../Dashboard/Members/RecommendedClasses";
import ProfileSetting from "../Dashboard/Members/ProfileSetting";
import AllSubscriber from "../Dashboard/Admin/AllSubscriber";
import AllTrainers from "../Dashboard/Admin/AllTrainers";
import { AppliedTrainer } from "../Dashboard/Admin/AppliedTrainer";
import Balance from "../Dashboard/Admin/Balance";
import Forum from "../Pages/Forum/Forum";
import TrainerRoutes from "./TrainerRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trainer",
        element: <Trainer />,
      },
      {
        path: "/trainerDetails/:id",
        element: <TrainerDetails />,
      },
      {
        path: "/beTrainer",
        element: (
          <PrivateRoute>
            <BeTrainer />
          </PrivateRoute>
        ),
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/forum",
        element: <Forum />,
      },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      /////// Trainer Routes \\\\\
      {
        path: "manageSlots",
        element: (
          <PrivateRoute>
            <ManageSlots />
          </PrivateRoute>
        ),
      },
      {
        path: "manageMember",
        element: (
          <PrivateRoute>
            <ManageMember />
          </PrivateRoute>
        ),
      },
      {
        path: "addNewForum",
        element: (
          <PrivateRoute>
            <AddNewForum />
          </PrivateRoute>
        ),
      },
      {
        path: "addNewClasses",
        element: (
          <PrivateRoute>
            <TrainerRoutes>
              <AddNewClasses />
            </TrainerRoutes>
          </PrivateRoute>
        ),
      },
      /// Member Routes
      {
        path: "activityLog",
        element: (
          <PrivateRoute>
            <ActivityLog />
          </PrivateRoute>
        ),
      },
      {
        path: "recommendedClasses",
        element: (
          <PrivateRoute>
            <RecommendedClasses />
          </PrivateRoute>
        ),
      },
      {
        path: "profileSetting",
        element: (
          <PrivateRoute>
            <ProfileSetting />
          </PrivateRoute>
        ),
      },
      ///// Admin Routes \\\\
      {
        path: "allSubscriber",
        element: (
          <PrivateRoute>
            <AllSubscriber />
          </PrivateRoute>
        ),
      },
      {
        path: "allTrainers",
        element: (
          <PrivateRoute>
            <AllTrainers />
          </PrivateRoute>
        ),
      },
      {
        path: "appliedTrainer",
        element: (
          <PrivateRoute>
            <AppliedTrainer />
          </PrivateRoute>
        ),
      },
      {
        path: "balance",
        element: (
          <PrivateRoute>
            <Balance />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
