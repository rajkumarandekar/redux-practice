import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import buyLaptop, { buyMobile, fetchUsers } from "../redux/actions";

function VShop(props) {
  let users = useSelector((state) => state.users.users);
  let noOfLaptops = useSelector((state) => state.laptops.noOfLaptops);
  let noOfMobiles = useSelector((state) => state.mobiles.noOfMobiles);

  return (
    <div>
      <h1>Welcome to VShop</h1>
      <div>
        <p>Dell Inspiron Laptop</p>
        <p>Available: {noOfLaptops}</p>
        <button onClick={props.buyLaptop}>BUY</button>
      </div>
      <div>
        <p>Dell Inspiron Laptop</p>
        <p>Available: {noOfMobiles}</p>
        <button onClick={props.buyMobile}>BUY</button>
      </div>
      <div>
        <p>Get users</p>
        <p>Counts: {users.length}</p>
        <button onClick={props.fetchUsers}>Call API</button>
      </div>
    </div>
  );
}

const mapDispatchToPatch = (dispatch) => {
  return bindActionCreators(
    {
      buyLaptop,
      buyMobile,
      fetchUsers,
    },
    dispatch
  );
};
export default connect(null, mapDispatchToPatch)(VShop);
