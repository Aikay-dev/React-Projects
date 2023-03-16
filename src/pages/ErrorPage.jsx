import { useRouteError } from "react-router"

const ErrorPage = () => {
    const error = useRouteError

  return (
    <>
    <div>ErrorPage</div>
    <p>{error.message}</p>
    </>
  )
}

export default ErrorPage