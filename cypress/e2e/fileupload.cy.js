describe('upload file',()=>{

    it('upload', ()=>{
        

        cy.visit("pedroshoes.com")
        cy.get('#filelocation').selectFile('C:\Users\pradeepkumar.shabadi\Downloads\Payment receipts.zip') //needs to pass the path of file.
    })
})