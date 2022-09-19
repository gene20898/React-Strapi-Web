import ErrorPage from "next/error"

export default function NullPage() {
    return (
        <ErrorPage statusCode={404} />
    );
  }