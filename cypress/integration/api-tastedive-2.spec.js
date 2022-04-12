//JavaScript method to load data file with require feature
const user = require("../fixtures/userData.json");

describe('Given TasteDive API testing', () => {
    //GET test with parameters
    context('When a user send GET request to tastedive api/similar with parameters', () => {
        it('then it should get tastedive query with parameters and print response', () => {
            //using custom command getTastediveRecommendation
            cy.getTastediveRecommendation('stargate', 1, 'movies', 2).then(response => {
                //print response
                cy.log(JSON.stringify(response));
                //expect code 200
                expect(response.status).to.eq(200);
                //expect property Similar
                expect(response.body).to.have.property('Similar');
                //expect 2 as results lenght 
                expect(response.body.Similar.Results.length).to.be.eq(2);
                //expect "Stargate" as results
                expect(response.body.Similar.Info[0].Name).to.be.eq("Stargate");
            })
        })
    });
});