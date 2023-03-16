import { useRouteError } from "react-router"

const ErrorPage = () => {
    const error = useRouteError

  return (
    <>
    <h1>ERROR 404</h1>
    <h3>The page your looking for is not found</h3>
    <p>{error.message}</p>
    </>
  )
}

export default ErrorPage