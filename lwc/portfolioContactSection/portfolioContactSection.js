import { LightningElement,api,track } from 'lwc';
import createContact from '@salesforce/apex/portfolioDisbursal.createContact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class PortfolioContactSection extends LightningElement {
    name = '';
    email = '';
    message = '';
    @track submitMessage = '';
    @track emailError = '';
    @track emailTimeout
    @track isTyping = false;

    getName(event){
        this.name = event.target.value;
    }
    validateEmail(event){
        this.isTyping = false;
        clearTimeout(this.emailTimeout);
        const emailField = event.target;
        this.emailTimeout = setTimeout(() => {
            if (!emailField.validity.valid) {
                this.emailError = 'Please enter a valid email address.';
            }     
        }, 500);// Delay of 500ms
        this.emailError = ''; 
        this.email = event.target.value; 
    }
    handleTyping(event) { 
        this.isTyping = true; 
        clearTimeout(this.emailTimeout); 
        this.clearEmailError(event); // Clear the error while typing
    }
    clearEmailError(event) {
        this.emailError = '';
        //console.log('Error message cleared');
    }

    getMessage(event){
        this.message = event.target.value;
    }
    createContactRecord(event){
        event.preventDefault();
        console.log('Email:',this.email);

        createContact({ 
            lastName: this.name, 
            email: this.email, 
            description: this.message 
        })
        .then(result => {
            console.log('Contact created:', result);
            this.submitMessage = 'Thank you for contacting. I\'ll get back to you soon.';
        })
        .catch(error => {
            console.error('Error creating contact:', error);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error',
                message : 'Something went Wrong!',
                varient :'error'
            }));
        });
    }
}