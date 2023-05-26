describe('Check Toaster', () => {
    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Modal & Overlays"]').click();
        cy.get('[title="Toastr"]').click();
        cy.wait(4000);
      });

        const test1 = [{
        testData: {
        position: 'top-right',
        index: 0,
        title: 'title1',
        content: 'content1',
        time: '20000',
        type: 'primary',
        indexType: 0,
        },
       
        expectedResult: {
        icon: 'email',
        title: 'title1',
        content: 'content1',
        color: 'rgb(233, 29, 99)',
        position: {
            first: 'justify-content',
            second: 'flex-end',
            third: 'align-items',
            fourth: 'flex-start',
          }
        }
        },

        {
            testData: {
            position: 'top-left',
            index: 1,
            title: 'title2',
            content: 'content2',
            time: '10000',
            type: 'success',
            indexType: 1,
            },
           
            expectedResult: {
            icon: 'checkmark',
            title: 'title2',
            content: 'content2',
            color: 'rgb(96, 175, 32)',
            position: {
                first: 'justify-content',
                second: 'flex-start',
                third: 'align-items',
                fourth: 'flex-start',
              }
            }
        },

        {
            testData: {
            position: 'bottom-left',
            index: 2,
            title: 'title3',
            content: 'content3',
            time: '10000',
            type: 'info',
            indexType: 2,
            },
           
            expectedResult: {
            icon: 'question-mark',
            title: 'title3',
            content: 'content3',
            color: 'rgb(4, 149, 238)',
            position: {
                first: 'justify-content',
                second: 'flex-start',
                third: 'align-items',
                fourth: 'flex-end',
              }
            }
        },

        {
            testData: {
            position: 'bottom-right',
            index: 3,
            title: 'title4',
            content: 'content4',
            time: '10000',
            type: 'warning',
            indexType: 3,
            },
           
            expectedResult: {
            icon: 'alert-triangle',
            title: 'title4',
            content: 'content4',
            color: 'rgb(255, 159, 5)',
            position: {
                first: 'justify-content',
                second: 'flex-end',
                third: 'align-items',
                fourth: 'flex-end',
              }
            }
        }
    ];


    test1.forEach(({testData, expectedResult}) => {
        it("", () => {
            // cy.get('[ng-reflect-selected="top-right"]').click();
            // cy.get('[ng-reflect-value="top-right"]').click();
            cy.get('[class="select-button"]').eq(1).click();
            cy.get('#cdk-overlay-0 nb-option').eq(`${testData.index}`).should('have.text', `${testData.position}`).click();
            cy.get('[ng-reflect-name="title"]').clear().type(`${testData.title}`);
            cy.get('[ng-reflect-name="content"]').clear().type(`${testData.content}`);
            cy.get('[name="timeout"] ').clear().type(`${testData.time}`);
            // cy.get('[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
            // cy.get('[ng-reflect-value="primary"]').click();
            cy.get('[class="select-button"]').eq(2).click();
            cy.get('#cdk-overlay-1 nb-option').eq(`${testData.indexType}`).should('have.text', `${testData.type}`).click();

            cy.get('[class="mat-ripple appearance-filled size-medium shape-rectangle status-basic nb-transition"]').click();
            
            //перевірки
            cy.get('[ng-reflect-toast="[object Object]"]')
            .should('have.css', 'background-color')
            .and('eq', `${expectedResult.color}`);
            
            cy.get('[class="title subtitle"]')
            .should('contain', `${expectedResult.title}`)
            
            cy.get('[class="message"]')
            .should('contain', `${expectedResult.content}`)
            
            cy.get('[class="toastr-overlay-container cdk-global-overlay-wrapper"]')
            .eq(0)
            .should('have.css', `${expectedResult.position.first}`, `${expectedResult.position.second}`) 
            .and('have.css', `${expectedResult.position.third}`, `${expectedResult.position.fourth}`);
            
            cy.get('nb-toast').find(`g[data-name="${expectedResult.icon}"]`).should('exist');
 
        })
    })
});

