const { defineConfig } = require('cypress');
const reportDir = process.env.REPORT_DIR || 'cypress/reports/mochawesome-report';
const reportName = process.env.REPORT_NAME || 'TestReport';
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const pdf = require('pdf-parse');
const fs = require("fs");
const path = require("path");
const dayjs = require('dayjs')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  projectId: "2xfwck",
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  env: {
    "myFDAurl": 'https://testweb.myfda.com:5643/signin',
    "CDurl": 'https://testweb.myfda.com:8743/cdlogin.jsp',
     "myFDA": 'https://testweb.myfda.com:5643/signin',
      "MAILSLURP_API_KEY": `83c8ae93411d39f737f2784a939b3c7687125d58924efe754a7f55b02fe549d2`
  
},
  reporterOptions: {
    reportDir: `${reportDir}/${reportName}`, // Report directory based on environment variables
    charts: true,
    reportPageTitle: 'myFDA Automation',
    embeddedScreenshots: true,
    inlineAssets: false,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task',
        {        
          queryDb: query => { return queryTestDb(query, config) },
          parseXlsx:filePath=>{ return parseXlsx(filePath) },
          readPdf:pdfPath=>{ return readPdf(pdfPath)}
         
        });
        on('task', {downloadFile});
        return config;
    } 
  }
  
})


function readPdf(pdfPath)
{
  return new Promise((resolve)=>{
    const filepath=path.resolve(pdfPath)
    const dataBuffer=fs.readFileSync(filepath)
    pdf(dataBuffer).then((data)=>{
      return resolve(data)
    })
  })
}  


function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db)
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
      connection.query(query, (error, results) => {
          if (error) reject(error)
          else {
              connection.end()
              return resolve(results)
          }
      })
  })
}