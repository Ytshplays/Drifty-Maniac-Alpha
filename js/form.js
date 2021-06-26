class Form {
    
constructor () {
    this.usernameInput = createInput ("username")
    this.passwordInput = createInput ("password")
    this.loginButton = createButton('Login');
     this.greeting = createElement('thanks for buying the game :D');
      this.title = createElement('driftyManiac');
}

hide () {
    this.usernameInput.hide();
    this.passwordInput.hide();
     this.loginButton.hide();
      this.greeting.hide();
      this.title.hide();
    }


    display() {
        //var title = createElement('h2')
        this.title.html("Drifty Maniac");
        this.title.position(displayWidth/2-50,0);


        this.usernameInput.position(displayWidth/2-40, displayHeight/2-80);
        this.passwordInput.position(displayWidth/2-40, displayHeight/2-160);
        this.loginButton.position(displayWidth/2+30,displayHeight/2);

    }














}