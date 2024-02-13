import { render, screen } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import SamuraiJSApp from "./App";
import ProfileStatus from "./ProfileStatus";
// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import { render, screen } from "@testing-library/react";
// import App from "./App";
// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("ProfileStatus component", () => {
  test("status from props s. be in the state", () => {
    const component = createRoot(<ProfileStatus status={"it-kama"} />);
  });
  const container = document.createElement("div");
  const root = createRoot(container);
  root.render(<SamuraiJSApp tab="home" />);
  root.unmount();
});
