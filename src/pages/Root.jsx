import { useEffect } from "react"
import { Outlet, useNavigate, useLocation } from "react-router-dom"

function Root() {
  const navigate = useNavigate()
  let location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/main")
    }
  }, [location.pathname, navigate])

  return <Outlet />
}

export default Root