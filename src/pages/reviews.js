import React from "react"
import Layout from "../components/layout"
import ListFeedBack from "../components/feedbackEn/listFeedback";

const Review = () => {
  return (
    <>
      <Layout>
        <section className="reviews-page">
          <ListFeedBack />
        </section>
      </Layout>
    </>
  )
}

export default Review
