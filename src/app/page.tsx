import { GetStaticProps } from "next";
import { ReactNode } from "react";

type Response = {
  text: string,
  status: number
}

export const getStaticProps : GetStaticProps = async () => {
  const apiResponse: Response = {
    text: "Sample API Response",
    status: 200
  }
  
  return {
    props: {
      apiResponse
    }
  }
}

export default function Home({ apiResponse }: {apiResponse: Response}): ReactNode{
  return (
    <>
    <h2>The text returned from the API is:</h2>
    <h3>{ apiResponse.text }</h3>
    </>
  )
}