import React from "react";
import Table from "react-bootstrap/Table";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Test = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="section-header text-center text-capitalize">
            <h3>portfolio</h3>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <ul class="filter align-items-center">
            <li data-filter="*">all</li>
            <li data-filter=".web-design">web design</li>
            <li data-filter=".graphics-design">graphics design</li>
            <li data-filter=".brand">brand</li>
          </ul>
        </div>
        <div class="row">
          <div class="portfolio-container full-width">
            <div class="portfolio-item col-md-3 web-design">
              <div class="item-content text-center">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                  alt=""
                />
                <div class="img-overlay d-flex align-items-center">
                  <div class="info full-width">
                    <div class="description">Web Design</div>
                    <div class="item-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-item col-md-3 brand">
              <div class="item-content text-center">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                  alt=""
                />
                <div class="img-overlay d-flex align-items-center">
                  <div class="info full-width">
                    <div class="description">Web Design</div>
                    <div class="item-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-item col-md-6 brand">
              <div class="item-content text-center">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                  alt=""
                />
                <div class="img-overlay d-flex align-items-center">
                  <div class="info full-width">
                    <div class="description">Web Design</div>
                    <div class="item-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-item col-md-6 web-design">
              <div class="item-content text-center">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                  alt=""
                />
                <div class="img-overlay d-flex align-items-center">
                  <div class="info full-width">
                    <div class="description">Web Design</div>
                    <div class="item-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-item col-md-3 graphics-design">
              <div class="item-content text-center">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                  alt=""
                />
                <div class="img-overlay d-flex align-items-center">
                  <div class="info full-width">
                    <div class="description">Web Design</div>
                    <div class="item-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-item col-md-3 web-design">
              <div class="item-content text-center">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/SwTWrss/BOSS-The-Scent-Private-Accord-For-Him.jpg"
                  alt=""
                />
                <div class="img-overlay d-flex align-items-center">
                  <div class="info full-width">
                    <div class="description">Web Design</div>
                    <div class="item-icon">
                      <i class="fa fa-link"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Test;
