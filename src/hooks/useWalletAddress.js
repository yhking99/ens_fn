import { shallowEqual, useSelector } from "react-redux"

export default () => {
  const { walletAddress } = useSelector(s => s.auth, shallowEqual);
  return walletAddress;
}