import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "../Layout"
import Redax from "./pages/Redax"
import Zustand from "./pages/Zustand"

export default function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Redax />
        },
        {
          path: "/products",
          element: <Zustand />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}
