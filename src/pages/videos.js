import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import "./videos.scss"
const Videos = () => {
  return (
    <Layout title="Videos">
      <SEO title="Videos" />
      <div className="videos">
        <div className="video-container">
          <div className="video-inner">
            <iframe
              title="Chuck's Revenge"
              src="https://www.youtube.com/embed/wR4rQaqpy7k"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="u-text-center">
          <a
            className="btn btn-white"
            href="https://www.youtube.com/channel/UCXniLPlTi5TJxdI5CtnNNOg"
            target="_blank"
            rel="noopener noreferrer"
          >
            More videos
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Videos
