import React from "react"
import Layout from "../components/layout"
import ListTour from "../components/toursEn/listTour"

const ThemeTour = () => {
  return (
    <>
      <Layout>
        <section className="themeTour-page">
          <ListTour />
        </section>
      </Layout>
    </>
  )
}

export default ThemeTour
