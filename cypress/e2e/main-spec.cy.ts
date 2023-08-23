describe("The entire WeatherNow app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("has the SearchDrawer element even when not shown", () => {
    cy.get(".MuiDrawer-root").should("exist");
  });

  it("shows the SearchDrawer element when clicked on a button", () => {
    cy.get(".MuiDrawer-root").should("not.be.visible");
    cy.get("button").contains("Search for places").click();
    cy.get(".MuiDrawer-root").should("be.visible");
  });

  it("displays a list of locations when user types in seach input", () => {
    cy.get("button").contains("Search for places").click();
    cy.get(".MuiDrawer-root ul").should("not.be.visible");
    cy.get(".MuiDrawer-root input").type("Mos");
    cy.get(".MuiDrawer-root ul")
      .children()
      .should("exist")
      .and("have.length.at.least", 1);
  });
});

export {};
