const { join } = require('path')
const allure = require('allure-commandline')

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
