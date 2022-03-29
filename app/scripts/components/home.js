/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from "react";

class Home extends React.Component {
  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof Home
   */

  render() {
    return (
      <section id="home">
      <div className="content"> 
      {this.props.products.map((item) => (
            <div className="products" key={item._id}>
              <div className="column">
                <div className="card-wd">
                  <img src={`${item.picture}`} alt="cart" />
                  <div className="pro-detail">
                    <h4>{item.name}</h4>
                    <div className="location">
                      <p className="price-box">
                        <i className="fa-solid fa-location-dot"></i> {item.price}
                      </p>
                      <p>
                     {item.about}
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
      </section>
    );
  }
}

// Export out the React Component
module.exports = Home;
