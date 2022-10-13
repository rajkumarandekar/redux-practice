import { Component } from "react";
import { connect } from "react-redux";

import buyLaptop, { buyMobile, fetchUsers } from "../redux/actions";

export class Shop extends Component {
  // state = { noOfLaptops: 100 };

  //buyLaptop = () => {
  //this.setState({noOfLaptops:this.state.noOfLaptops-1})
  //}

  render() {
    return (
      <div>
        <h1>Welcome to VShop</h1>
        <div>
          <p>Dell Inspiron Laptop</p>
          <p>Available: {this.props.noOfLaptops}</p>
          <button onClick={this.props.buyLaptop}>BUY</button>
        </div>
        <div>
          <p>Dell Inspiron Laptop</p>
          <p>Available: {this.props.noOfMobiles}</p>
          <button onClick={this.props.buyMobile}>BUY</button>
        </div>
        <div>
          <p>Get users</p>
          <p>Counts: {this.props.users.length}</p>
          <button onClick={this.props.fetchUsers}>Call API</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    noOfLaptops: state.laptops.noOfLaptops,
    noOfMobiles: state.mobiles.noOfMobiles,
    users: state.users.users,
  };
};

const mapDispatchToPatch = (dispatch) => {
  return {
    buyLaptop: () => dispatch(buyLaptop()),
    buyMobile: () => dispatch(buyMobile()),
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToPatch)(Shop);
