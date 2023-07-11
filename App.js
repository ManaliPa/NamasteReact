const parent = React.createElement(
  "div",
  { id: "paremt" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("div", { id: "child1" }, "Hello World from parent"),
    React.createElement("div", { id: "child1" }, "Hello World from parent 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("div", { id: "child2" }, "Hello World from parent"),
    React.createElement("div", { id: "child2" }, "Hello World from parent 2"),
  ])
);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
