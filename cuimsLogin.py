from selenium import webdriver

browser = webdriver.Firefox()
browser.get('https://uims.cuchd.in/uims/')

uid = browser.find_element_by_xpath('//*[@id="txtUserId"]')
uid.send_keys('Your UID')

nextButton = browser.find_element_by_xpath('//*[@id="btnNext"]')
nextButton.click()

password = browser.find_element_by_xpath('//*[@id="txtLoginPassword"]')
password.send_keys('Your Password')

nextButton = browser.find_element_by_xpath('//*[@id="btnLogin"]')
nextButton.click()