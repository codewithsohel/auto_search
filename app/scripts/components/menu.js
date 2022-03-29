/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import axios from "axios";
import React from "react";
import Home from "./home";

class Menu extends React.Component {
  /**
   * Main constructor for the Menu Class
   * @memberof Menu
   */

  constructor() {
    super();
    this.state = {
      filterItems: [],
      products: [],
      showingSearch: false,
    };
  }

  fetchItems = () => {
    axios
      .get("http://localhost:3035/", {
        mode: "no-cors",
      })
      .then((res) => {
        this.setState({ products: res.data, filterItems: res.data });
      });
  };

  componentDidMount() {
    this.fetchItems();
  }

  /**
   * Shows or hides the search container
   * @memberof Menu
   * @param e [Object] - the event from a click handler
   */
  showSearchContainer(e) {
    e.preventDefault();
    this.setState({
      showingSearch: !this.state.showingSearch,
    });
  }

  /**
   * Calls upon search change
   * @memberof Menu
   * @param e [Object] - the event from a text change handler
   */
  onSearch(e) {
    if (e.target.value !== "") {
      const items = this.state.products.filter((d) => {
        return d.name.toLowerCase().includes(e.target.value.toLowerCase());
      });

      this.setState({ filterItems: items });
    } else this.setState({ filterItems: this.state.products });
  }

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  render() {
    return (
      <div>
        <header className="menu">
          <div className="menu-container">
            <div className="menu-holder">
              <h1>ELC</h1>
              <nav>
                <a href="#" className="nav-item">
                  HOLIDAY
                </a>
                <a href="#" className="nav-item">
                  WHAT'S NEW
                </a>
                <a href="#" className="nav-item">
                  PRODUCTS
                </a>
                <a href="#" className="nav-item">
                  BESTSELLERS
                </a>
                <a href="#" className="nav-item">
                  GOODBYES
                </a>
                <a href="#" className="nav-item">
                  STORES
                </a>
                <a href="#" className="nav-item">
                  INSPIRATION
                </a>

                <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                  <i className="material-icons search">search</i>
                </a>
              </nav>
            </div>
          </div>
          <div
            className={
              (this.state.showingSearch ? "showing " : "") + "search-container"
            }
          >
            <input type="text" onChange={(e) => this.onSearch(e)} />
            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
              <i className="material-icons close">close</i>
            </a>
          </div>
        </header>
        <Home products={this.state.filterItems} />
      </div>
    );
  }
}

// Export out the React Component
module.exports = Menu;


 handleSvg = (item) => {
    console.log(item);
    this.setState({...this.state.filterItems,checkFlag:!this.state.checkFlag});
    this.state.filterItems.map((e)=>{
      if(e.svg.props.children.props.fill === item){
        this.setState({...this.state.filterItems,...this.checkFlag,colorCode:item})
      }
    })
  }
  
     // svgData.images.sort(() => Math.random() - 0.5);

            // var randomItem =
              // svgData &&
              // svgData.images[Math.floor(Math.random() * svgData.images.length)];
            // const colorCode = randomItem.svg.props.children.props.fill;
            // return (
            //   <div
            //     onClick={() => this.handleSvg(colorCode)}
            //     className="App-logo"
            //     key={key}
            //   >
            //     {!(this.state.clickSvg === colorCode) ? (
            //       <span>{randomItem.svg}</span>
            //     ) : (
            //       <span className="fill-color">{colorCode}</span>
            //     )}
            //   </div>
            // );
  
  
      <div className="App">
        {this.state.filterItems.map((item, key) => {
          return (
            <div onClick={()=>this.handleSvg(item.svg.props.children.props.fill)} className="App-logo" key={key}>
              {!(this.state.colorCode === item.svg.props.children.props.fill) ? <span>{item.svg}</span> : <span className="fill">{item.svg.props.children.props.fill}</span> }
            </div>
          );
        })}
      </div>
