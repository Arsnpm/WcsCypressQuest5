//JavaScript method to load data file with require feature
const user = require("../fixtures/userData.json");

describe('Given TasteDive API testing', () => {
    //GET test without parameters
    context('When a user send GET request to tastedive api/similar without parameters', () => {
        it('then it should get tastedive query without parameters and print response', () => {
            //using custom command getTastediveRecommendation
            cy.getTastediveRecommendation().then(response => {
                //print response
                cy.log(JSON.stringify(response));
                console.log(JSON.stringify(response));

                //expect code 200
                expect(response.status).to.eq(200);
                //expect property Similar
                expect(response.body).to.have.property('Similar');
                //expect 0 as results lenght 
                expect(response.body.Similar.Results.length).to.be.eq(0);
                //expect empty name as results
                expect(response.body.Similar.Info[0].Name).to.be.eq("");
            })
        })   
    });
});