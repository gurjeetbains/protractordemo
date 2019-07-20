//const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const HTMLReport = require('protractor-html-reporter-2');
const fs = require('fs-extra');
const jasmineReporters = require('jasmine-reporters');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
  //   onPrepare: function() {
  //     jasmine.getEnv().addReporter(
  //       new Jasmine2HtmlReporter({
  //         savePath: 'target/screenshots'
  //       })
  //     );
  //  },
  onPrepare: function(){fs.emptyDir('screenshots/', function (err) {
    console.log(err);
});
jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
  consolidateAll: true,
  savePath: './',
  filePrefix: 'xmlresults'
}));
 },
   onComplete: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
       browserName = caps.get('browserName');
       browserVersion = caps.get('version');
       platform = caps.get('platform');
       testConfig = {
           reportTitle: 'Your site Test Execution Report',
           outputPath: './',
           outputFilename: 'YourTestReport',
           screenshotPath: './screenshots',
           testBrowser: browserName,
           browserVersion: browserVersion,
           modifiedSuiteName: false,
           screenshotsOnlyOnFailure: true,
           testPlatform: platform
       };
       new HTMLReport().from('xmlresults.xml', testConfig);
   });
},
plugins: [{
  package: 'jasmine2-protractor-utils',
  disableHTMLReport: true,
  disableScreenshot: false,
  screenshotPath:'./screenshots',
  screenshotOnExpectFailure:false,
  screenshotOnSpecFailure:true,
  clearFoldersBeforeTest: true
}],
    specs: ['todo-spec.js']
  };