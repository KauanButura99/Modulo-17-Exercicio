
# Teste automatizado Mobile
Testes feitos no Apk da Woocommerce. Com o intuito de testar o fluxo de login e cadastro de produto na loja EBAC - SHOP
 


## Pre-requisites

**WSL2** Precisa-se estar ativado em sua máquina

**Android Studio:** https://developer.android.com/studio 

**Vs Code:** https://code.visualstudio.com/download

**Appium Server GUI:** https://github.com/appium/appium-desktop 

**JDK 20:** https://www.oracle.com/br/java/technologies/downloads/

**Appium Inspector:** https://github.com/appium/appium-inspector/releases

**APK Woocomerce Versão 7.3.1:** https://github.com/woocommerce/woocommerce-android/releases






## Installation

**Wdio**

```bash
 npm init wdio .
```
````
exports.config = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    capabilities: [{
        "platformName": "Android",
        "appium:platformVersion": "9.0",
        "appium:deviceName": "ebac-qe",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(), './App/lojaEbac.apk'),
        "appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"
        //"appium:appWaitActivity": "com.woocommerce.android/.ui.main.MainActivity"
    }],
    waitforTimeout: 10000,
    mochaOpts: {
        timeout: 50000
    },
    connectionRetryTimeout: 120000,
    //services: ['appium'],
    framework: 'mocha'
````
**Allure Report**

```bash
  npm install @wdio/allure-reporter --save-dev
  npm i allure-commandline
```
wdio.confi.js
```
const allure = require('allure-commandline')

reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]

onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        driver.takeScreenshot();
    }
}
```

**Join**

```bash
  npm install join
```

````
const { join } = require('path')
````


## Running Tests
Comando para rodar em sua máquina

```bash
  npm test
```


## Documentation

[Documentation](https://webdriver.io/docs/api/element)

