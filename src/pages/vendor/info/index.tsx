import { fetchUsers } from "../../../services/vendor/vendor-info.service";
import "./VendorInfo.scss";

function VendorInfo() {
  console.log(fetchUsers());
  return <>Vendor Informatino</>;
}

export default VendorInfo;
