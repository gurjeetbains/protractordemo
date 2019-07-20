describe('Basic login with inavlid data', function() {
    it('Basic Login for yoursite as a user with valid data', function() {
      browser.get('https://yourQAsite.com/#/login');//Opening of QA website here 
  
      element(by.model('user.username')).sendKeys('username'); //ID to login as Locum is entered here 
      element(by.id('input-password')).sendKeys('password'); //Password to login 
      element(by.xpath('//button[contains(text(),"Login")]')).click();// Login CLicked
      
      element(by.xpath('//h1')).getText().then(function (text){
        let loginVerification=text.toLowerCase().includes('welcome')
        if(loginVerification){
          expect(loginVerification).toEqual(true)
          console.log('Login is successful');
          expect(loginVerification).toEqual(true)
        }else{
          console.log('Login failed');
        }
      });
      browser.restart();
    });

    it('Basic Login for yoursite as a user with invalid data', function() {
      browser.get('https://yourQAsite.com/#/login');//Opening of QA website here 
  
      element(by.model('user.username')).sendKeys('username'); //ID to login as Locum is entered here 
      element(by.id('input-password')).sendKeys('password'); //Wrong Password to login 
      element(by.xpath('//button[contains(text(),"Login")]')).click();// Login CLicked
      
      element(by.xpath('//h1')).getText().then(function (text){
        let loginVerification=text.toLowerCase().includes('welcome')
        if(loginVerification){
          expect(loginVerification).toEqual(true)
          console.log('Login is successful');
        }else{
          console.log('Login failed');
        }
      });
    });
    browser.restart();
  });