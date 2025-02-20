import { Listing } from "../Listing/Listing";
import { Data } from "../Data/Data";
import "./App.css";

export function App() {
  return (
    <>
      <Listing data={Data} />
    </>
  );
}
