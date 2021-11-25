import webdriver from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome.js'
import seleniumUntil from 'selenium-webdriver/lib/until.js'
import chromedriver from 'chromedriver'

let chromeoptions = new chrome.Options();
chromeoptions.addArguments("--start-maximized");
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())
export const driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(chromeoptions).build()

export const until = {...seleniumUntil}