describe('Fill in Forms', () => {
    const tests = [
        {email: 'baurina1@gmail.com',
        password: '111111'},

    ]

    tests.forEach(({email, password}) => {
        it("Basic Form", () => {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
            cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
            cy.get('[title="Forms"]').click();
            cy.get('[title="Form Layouts"]').click();
            cy.get('#exampleInputEmail1').type(email);
            cy.get('#exampleInputEmail1').should("contain.value", `${email}`);
            cy.get('#exampleInputPassword1').type(password);
            cy.get('#exampleInputPassword1').should("contain.value", `${password}`);
            cy.get('[class="col-md-6"] [class="ng-untouched ng-pristine ng-valid"] [class="custom-checkbox"]').click();
            cy.get('[class="col-md-6"] [status="danger"]').click();
        })
    })
})