

# Teste automatizado Mobile
Testes feitos no Apk da Woocommerce. Com o intuito de testar o fluxo de login e cadastro de produtos na loja EBAC - SHOP. Testes compilados no site BrowserStack. 
 


## Pre-requisites

**WSL2** Precisa-se estar ativado em sua máquina

**Android Studio:** https://developer.android.com/studio 

**Vs Code:** https://code.visualstudio.com/download

**Appium Server GUI:** https://github.com/appium/appium-desktop 

**JDK 20:** https://www.oracle.com/br/java/technologies/downloads/

**Appium Inspector:** https://github.com/appium/appium-inspector/releases

**APK Woocomerce Versão 7.3.1:** https://github.com/woocommerce/woocommerce-android/releases

**BrowserStack** https://www.browserstack.com/ - Para compilar os seus testes

**Docker** https://www.docker.com/products/docker-desktop/

**Jenkins** 






## Installation

**Wdio**

```bash
 npm init wdio .
```
````

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'kauanbutura_vDyOI7',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'czErgyLnN81G2QTpcj9a',

    //services: ['appium'],
    services: [
        ['browserstack', {
            testObservability: true,
            testObservabilityOptions: {
                projectName: "Meu primeiro projeto em Device Farm",
                buildName: "1"
            },
            browserstackLocal: true
        }]
    ],

    specs: [
        './test/specs/**/*.spec.js'
    ],
    capabilities: [{
        app: 'bs://2022a00670e8657c2da8d8106b0d509bdd0e1ebe',
        // buildIdentifier: "${BUILD_NUMBER}",
        browserstackLocal: true,
        deviceName: 'Samsung Galaxy Note 20',
        project: 'Meu primeiro projeto em Device Farm',
        build: '1',
        platformVersion: '10.0',
        platformName: 'android',
        name: 'Teste Publicar Produto na Loja Ebac'
    }],

    waitforTimeout: 10000,
    mochaOpts: {
        timeout: 50000
    },
    connectionRetryTimeout: 120000,

    framework: 'mocha',
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
        }]],

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


