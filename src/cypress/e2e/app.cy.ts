import react from "react";

describe("test", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    console.log("cypress test");
  });
});
