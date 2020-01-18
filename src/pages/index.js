import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import landingImg from "../images/landingimage.jpg"
import MenuComponent from "../components/menu"

const ActionButton = styled.button`
  background: #ff6107;
  font-style: normal;
  line-height: 17px;
  color: #fff;
  border: 2px solid #ff6107;
  margin-right: 4px;
  margin-bottom: 4px;
  font-size: 13px !important;
  border-radius: 30px;
  font-weight: 400;
  font-family: "Lora", Georgia, serif;
  text-transform: uppercase;
  padding: 18px 36px !important;
`
const HomeStyles = styled.div`
  font-family: Lora !important;
  min-height: 100vh;
  .landing {
    padding-top: 100px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #333;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${landingImg});
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;

    h2 {
      font-family: Lora;
      font-weight: 400;
      font-style: normal;
      font-size: 38px;
    }
  }
  .res-info {
    padding: 40px 16px;
    color: #fff;
    background-color: #302939;
    text-align: center;
    .res-info-item {
      .title {
        font-weight: 500;
        line-height: 1.1;
        font-size: 16px;
        margin-bottom: 15px;
      }
      p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 16px;
      }
    }
    @media (min-width: 1025px) {
      display: grid;
      grid-template-columns: 25% 25% 25% 25%;
    }
  }
`
const IndexPage = () => (
  <Layout>
    <HomeStyles>
      <div className="landing">
        <div className="landing-box">
          <h2>We serve good food</h2>
          <p>
            Authentic food sourced from the best location with advanced non GMO
            methods
          </p>
          <Link to="/menu">
            <ActionButton>View our menu</ActionButton>
          </Link>
        </div>
      </div>
      <div className="res-info">
        <div className="res-info-item">
          <h3 className="title">Address</h3>
          <p>98 West 21th Street, Suite 721 New York NY 10016</p>
        </div>
        <div className="res-info-item">
          <h3 className="title">Opening Time</h3>
          <p>Monday - Sunday 8am - 9pm</p>
        </div>
        <div className="res-info-item">
          <h3 className="title">Phone</h3>
          <p>+ 001 234 567 + 001 234 567</p>
        </div>
        <div className="res-info-item">
          <h3 className="title">Email</h3>
          <p>info@domain.com luto@email.com</p>
        </div>
      </div>
      <MenuComponent />
    </HomeStyles>
  </Layout>
)

export default IndexPage
