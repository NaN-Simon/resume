import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  // useEffect(() => {
  //   console.error(error);
  // });


  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {error && <i>{error.statusText || error.message}</i>}
      </p>
    </div>
  );
}
