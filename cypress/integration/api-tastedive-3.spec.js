//JavaScript method to load data file with require feature
const user = require("../fixtures/userData.json");

describe('Given TasteDive API testing', () => {
    //GET test with json file as command parameters
    context('When a user send GET request to tastedive api/similar with fixtured parameters', () => {
        it('then it should get tastedive first indexed fixtured query and print response', () => {
            //using custom command getTastediveRecommendation
            cy.getTastediveRecommendation(user[0].searchQuery, user[0].additionalInfo, user[0].OptionalQueryType, user[0].OptionalMaxNumberToRetrieve).then(response => {
                //print response
                cy.log(JSON.stringify(response));
                //expect code 200
                expect(response.status).to.eq(200);
                //expect property Similar
                expect(response.body).to.have.property('Similar');
                //expect 2 as results lenght 
                expect(response.body.Similar.Results.length).to.be.eq(2);
                //expect "Batman" as results
                expect(response.body.Similar.Info[0].Name).to.be.eq("Batman");
            })
        })
    });
});