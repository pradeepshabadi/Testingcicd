import 'cypress-iframe'

describe('testing all',()=>{

    it('testing search',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //** Dropdowns*/
        cy.get('select').select('Option2').should('have.value','option2');
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each(($el)=>{

            if($el.text()==="India"){
                $el.click();
            }
        })

        //***child window or tab

        // cy.get('[class="blinkingText"]').invoke('removeAttr','target').click();

        // cy.origin('https://qasummit.org/',()=>{  //when domain name changes(cross domain) we need to give this line and url perform with in this method
 
        //     //perform required actions once u go out you will be again in previous page
        //     //cy.get('a.hero_register_btn').click();
        //     cy.get('[class="about_conference_heading"]').should('contain','About QA Summit Meetups');

        
        //     })

             //***mouseover
             cy.get('.mouse-hover-content').invoke('show')
             cy.contains('Top').click(); //cypress can click on hidden elements as well by using{force:true}

             //**Frames- for this install plugin, npm install -D cypress-iframe and write above describe as import 'cypress-iframe'

             cy.frameLoaded('#courses-iframe') //it will switch to the frame inside a page

             cy.iframe().find('[href="mentorship"]').eq(0).click(); //this is mandatory step ,eq(0) is index when you get more result for locator


   

        })
       
       

    })


  