describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Should navigate between different pages", () => {
    // Go to projects
    cy.get('a[href*="projects"]').eq(0).click();
    cy.url().should("include", "/projects");
    cy.get("h1").contains("Projects");

    // Go back to Home
    cy.get('a[href="/"]').click();
    cy.get("h1").contains("About Me");

    // Go to Experience
    cy.get('a[href*="experience"]').eq(0).click();
    cy.url().should("include", "/experience");
    cy.get("h1").contains("Experience");

    // Go to Contact
    cy.get('a[href*="contact"]').eq(0).click();
    cy.url().should("include", "/contact");
    cy.get("h1").contains("Contact");
  });
});
