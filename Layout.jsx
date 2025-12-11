import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
    <header className="flex justify-around mb-[20px]">
        <Link to="/"><button>Users</button></Link>
        <Link to="/products"><button>Products</button></Link>
    </header>
    <main>
        <Outlet />
    </main>
    </>
  )
}
