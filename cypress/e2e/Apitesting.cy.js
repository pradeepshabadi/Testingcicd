
// describe('api testing', ()=>{


//   it('mock response',()=>{

//     //cy.intecept(reuestobject, responseobject) takes 2 parameters as request and response object
//     //cy.intercept({requestobject},{responseobject})
//     cy.visit('https://rahulshettyacademy.com/angularAppdemo/');


//     cy.intercept({

//       method: 'GET',
//       url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
//     }, 
    
//     {
//       statusCode: 200,
//       body: [{
//             "book_name": "RestAssured with Java",
//             "isbn": "LSA",
//             "aisle": "2303"
//         }]
      


//   }).as('bookreply')
//     cy.get(' .btn-primary').click();
//     cy.wait('@bookreply');
//     cy.get('p').should('have.text','Oops only 1 Book available');

    


//   })

//   it('request testing',()=>{






// //////cy.request(method,url,body)
// cy.request('POST','url', {

//   "name":"Learn Appium Automation with Java",
//   "isbn":"bcd",
//   "aisle":"227",
//   "author":"John foe"
  
//   }).then((response=>{

//     expect(response.body).to.have.property("MSG","succesfully added")
//     expect(response.body).to.eq(200)
//   }))

//   })

// })

