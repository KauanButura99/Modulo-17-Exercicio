const { join } = require('path')
const allure = require('allure-commandline')

exports.config = {
    //hostname: '127.0.0.1',
    //port: 4723,
    //path: '/wd/hub',
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
        //"platformName": "Android",
        //"appium:platformVersion": "9.0",
        //"appium:deviceName": "ebac-qe",
        //"appium:automationName": "UiAutomator2",
        //"appium:app": join(process.cwd(), './App/lojaEbac.apk'),
        //"appium:appWaitActivity": "com.woocommerce.android.ui.login.LoginActivity"
        //"appium:appWaitActivity": "com.woocommerce.android/.ui.main.MainActivity"


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
