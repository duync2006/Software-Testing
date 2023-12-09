const {By, Key, Builder, until, error} = require("selenium-webdriver");

const Helper = require('./testingHelper')


async function main() { 
  await TC_B07_001();
  await TC_B07_002();
  await TC_B07_003();
  await TC_B07_004();
  await TC_B07_005();
  await TC_B07_006();
  await TC_B07_007();
}

main();

async function TC_B07_001() {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToAddNewCourses(driver)
  
  await driver.findElement(By.id("id_fullname")).sendKeys("Developing");

  await driver.findElement(By.id("id_shortname")).sendKeys("SE");
  await driver.findElement(By.xpath("//span[@class='form-autocomplete-downarrow position-absolute p-1']")).click();
  await driver.findElement(By.xpath("//li[@data-value='5']")).click();
  
  await driver.findElement(By.id("id_saveanddisplay")).click();
  try {
    if(await driver.findElement(By.xpath("//li[@id='section-0']")).isDisplayed() == true) {
      console.log("Testcase TC-B07-001 success")
    }
  } catch (error) {
    console.log("Testcase TC-B07-001 failed")
  }
  await driver.quit()
}

async function TC_B07_002() {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToAddNewCourses(driver)
  
  await driver.findElement(By.id("id_fullname")).sendKeys("Developing");

  await driver.findElement(By.id("id_shortname")).sendKeys("SE");
  
  await driver.findElement(By.id("id_saveanddisplay")).click();
  if(await driver.findElement(By.id('id_error_shortname')).isDisplayed() == true &&
     await driver.findElement(By.id('id_error_shortname')).getText() == "Short name is already used for another course (Developing)") {
    console.log("Testcase TC-B07-002 success")
  } else {
    console.log("Testcase TC-B07-002 Failed")
  }
  await driver.quit() 
}

async function TC_B07_003() {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToAddNewCourses(driver)
  
  await driver.findElement(By.id("id_fullname")).sendKeys("");

  await driver.findElement(By.id("id_shortname")).sendKeys("Helloworld");
  await driver.findElement(By.xpath("//span[@class='form-autocomplete-downarrow position-absolute p-1']")).click();
  await driver.findElement(By.xpath("//li[@data-value='5']")).click();
  
  await driver.findElement(By.id("id_saveanddisplay")).click();
  if(await driver.findElement(By.id('id_error_fullname')).isDisplayed() == true &&
     await driver.findElement(By.id('id_error_fullname')).getText() == "- Missing full name") {
    console.log("Testcase TC-B07-003 success")
  } else {
    console.log("Testcase TC-B07-003 Failed")
  }
  await driver.quit() 
}

async function TC_B07_004() {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToAddNewCourses(driver)
  
  await driver.findElement(By.id("id_fullname")).sendKeys("Developing");

  await driver.findElement(By.id("id_shortname")).sendKeys("");
  await driver.findElement(By.xpath("//span[@class='form-autocomplete-downarrow position-absolute p-1']")).click();
  await driver.findElement(By.xpath("//li[@data-value='5']")).click();
  
  await driver.findElement(By.id("id_saveanddisplay")).click();
  if(await driver.findElement(By.id('id_error_shortname')).getText() == "- Missing short name") {
    console.log("Testcase TC-B07-004 success")
  } else {
    console.log("Testcase TC-B07-004 Failed")
  }
  await driver.quit() 
}

async function TC_B07_005() {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToAddNewCourses(driver)
  
  await driver.findElement(By.id("id_fullname")).sendKeys("");

  await driver.findElement(By.id("id_shortname")).sendKeys("");
  
  await driver.findElement(By.id("id_saveanddisplay")).click();
  if(await driver.findElement(By.id('id_error_shortname')).getText() == "- Missing short name" &&
     await driver.findElement(By.id('id_error_fullname')).getText() == "- Missing full name") {
    console.log("Testcase TC-B07-005 success")
  } else {
    console.log("Testcase TC-B07-005 Failed")
  }
  await driver.quit() 
}

async function TC_B07_006() {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToAddNewCourses(driver)
  
  await driver.findElement(By.id("id_fullname")).sendKeys("Developing");

  await driver.findElement(By.id("id_shortname")).sendKeys("Dev");
  // await driver.findElement(By.xpath("//span[@class='form-autocomplete-downarrow position-absolute p-1']")).click();
  await driver.findElement(By.xpath("//div[@class='form-autocomplete-selection w-100 ']//span")).click();
  
  await driver.findElement(By.id("id_saveanddisplay")).click();
  // console.log(await driver.findElement(By.id('id_error_category')).getText())
  if(await driver.findElement(By.id('id_error_category')).getText() == "- You must supply a value here.") {
    console.log("Testcase TC-B07-006 success")
  } else {
    console.log("Testcase TC-B07-006 Failed")
  }
  await driver.quit() 
}

async function TC_B07_007() {
  // console.log(data[0])
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToAddNewCourses(driver)
  
  await driver.findElement(By.id("id_fullname")).sendKeys("Developing");
  
  await driver.findElement(By.id("id_shortname")).sendKeys("Dev");

  await driver.findElement(By.id("id_automaticenddate")).click();

  await driver.findElement(By.id("id_enddate_day")).click();
  driver.findElement(By.xpath("//select[@id='id_enddate_day']/option[@value='23']")).click();

  await driver.findElement(By.id("id_enddate_month")).click();
  driver.findElement(By.xpath("//select[@id='id_enddate_month']/option[@value='10']")).click();

  await driver.findElement(By.id("id_enddate_year")).click();
  driver.findElement(By.xpath("//select[@id='id_enddate_year']/option[@value='2023']")).click();

  await driver.findElement(By.id("id_saveanddisplay")).click();

  if(await driver.findElement(By.id('id_error_enddate')).getText() == "The course end date must be after the start date.") {
    console.log("Testcase TC-B07-007 success")
  } else {
    console.log("Testcase TC-B07-007 Failed")
  }
  await driver.quit() 
}


