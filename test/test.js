const {By, Key, Builder, until} = require("selenium-webdriver");

const Helper = require('./testingHelper')


// async function TC_B04_001() {
//   console.log("Read CSV File")
//   const data = await Helper.readDataDriven()
  
//   // console.log(data[0])
//   driver = await new Builder().forBrowser("chrome").build();
//   await driver.get("https://school.moodledemo.net/login/index.php")
//   await Helper.loginAsManager(driver)
//   await Helper.navigateToAddNewCourses(driver)
  
//   await driver.findElement(By.id("id_username")).sendKeys(data[0].id_username);

//   await driver.findElement(By.xpath("//a[@data-passwordunmask='edit']")).click();
//   await driver.findElement(By.id("id_newpassword")).sendKeys(data[0].id_password);
  
//   await driver.findElement(By.id("id_firstname")).sendKeys(data[0].id_firstname);
  
//   await driver.findElement(By.id("id_lastname")).sendKeys(data[0].id_lastname);
  
//   await driver.findElement(By.id("id_email")).sendKeys(data[0].id_email);

//   await driver.findElement(By.id("id_submitbutton")).click();

//   // console.log(await driver.findElement(By.xpath("//div[@class='alert alert-success alert-block fade in  alert-dismissible']")))
  
//   if(await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//div[@class='alert alert-success alert-block fade in  alert-dismissible']"))))) {
//     console.log("Testcase TC-B04-001 success")
//   } else {
//     console.log("Testcase Failed")
//   }
//   await driver.quit()
// }

async function TC_B04_001() {
  console.log("Read CSV File")
  const data = await Helper.readDataDriven()
  
  // console.log(data[0])
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToAddNewCourses(driver)
  
  await driver.findElement(By.id("id_fullname")).sendKeys("Developing");

  await driver.findElement(By.id("id_shortname")).sendKeys("Devvvvv");
  await driver.findElement(By.xpath("//span[@class='form-autocomplete-downarrow position-absolute p-1']")).click();
  await driver.findElement(By.xpath("//li[@data-value='5']")).click();
  
  await driver.findElement(By.id("id_saveanddisplay")).click();
  if(await driver.findElement(By.xpath("//li[@id='section-0']")).isDisplayed() == true) {
    console.log("Testcase TC-B04-001 success")
  } else {
    console.log("Testcase TC-B04-001 Failed")
  }
  await driver.quit()
  // console.log(await driver.getTitle())
  // if(await driver.wait(until.elementIsVisible(driver.findElement(By.id("courseindexsection0"))))) {
  //   console.log("Testcase TC-B04-001 success")
  // } else {
  //   console.log("Testcase Failed")
  // }
  // await driver.quit()
  // await driver.findElement(By.id("id_firstname")).sendKeys(data[0].id_firstname);
  
  // await driver.findElement(By.id("id_lastname")).sendKeys(data[0].id_lastname);
  
  // await driver.findElement(By.id("id_email")).sendKeys(data[0].id_email);



  // console.log(await driver.findElement(By.id("id_error_username")).getText())
  
}

async function TC_B04_002() {
  console.log("Read CSV File")
  const data = await Helper.readDataDriven()
  
  // console.log(data[0])
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToAddNewCourses(driver)
  
  await driver.findElement(By.id("id_fullname")).sendKeys("Developing");

  await driver.findElement(By.id("id_shortname")).sendKeys("Helloworld");
  await driver.findElement(By.xpath("//span[@class='form-autocomplete-downarrow position-absolute p-1']")).click();
  await driver.findElement(By.xpath("//li[@data-value='5']")).click();
  
  await driver.findElement(By.id("id_saveanddisplay")).click();
  if(await driver.findElement(By.id('id_error_shortname')).isDisplayed() == true &&
     await driver.findElement(By.id('id_error_shortname')).getText() == "") {
    console.log("Testcase TC-B04-002 success")
  } else {
    console.log("Testcase TC-B04-002 Failed")
  }
  await driver.quit() 
}

async function TC_B04_003() {
  console.log("Read CSV File")
  const data = await Helper.readDataDriven()
  
  // console.log(data[0])
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
    console.log("Testcase TC-B04-003 success")
  } else {
    console.log("Testcase TC-B04-003 Failed")
  }
  await driver.quit() 
}

async function TC_B04_004() {
  console.log("Read CSV File")
  const data = await Helper.readDataDriven()
  
  // console.log(data[0])
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
    console.log("Testcase TC-B04-004 success")
  } else {
    console.log("Testcase TC-B04-004 Failed")
  }
  await driver.quit() 
}

async function TC_B04_005() {
  console.log("Read CSV File")
  const data = await Helper.readDataDriven()
  
  // console.log(data[0])
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToAddNewCourses(driver)
  
  await driver.findElement(By.id("id_fullname")).sendKeys("");

  await driver.findElement(By.id("id_shortname")).sendKeys("");
  await driver.findElement(By.xpath("//span[@class='form-autocomplete-downarrow position-absolute p-1']")).click();
  await driver.findElement(By.xpath("//li[@data-value='5']")).click();
  
  await driver.findElement(By.id("id_saveanddisplay")).click();
  if(await driver.findElement(By.id('id_error_shortname')).getText() == "- Missing short name" &&
     await driver.findElement(By.id('id_error_fullname')).getText() == "- Missing full name") {
    console.log("Testcase TC-B04-005 success")
  } else {
    console.log("Testcase TC-B04-005 Failed")
  }
  await driver.quit() 
}

async function TC_B04_006() {
  console.log("Read CSV File")
  const data = await Helper.readDataDriven()
  
  // console.log(data[0])
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToAddNewCourses(driver)
  
  await driver.findElement(By.id("id_fullname")).sendKeys("Developing");

  await driver.findElement(By.id("id_shortname")).sendKeys("Dev");
  // await driver.findElement(By.xpath("//span[@class='form-autocomplete-downarrow position-absolute p-1']")).click();
  await driver.findElement(By.xpath("//div[@class='form-autocomplete-selection w-100 ']//span")).click();
  
  await driver.findElement(By.id("id_saveanddisplay")).click();
  console.log(await driver.findElement(By.id('id_error_category')).getText())
  if(await driver.findElement(By.id('id_error_category')).getText() == "- You must supply a value here.") {
    console.log("Testcase TC-B04-006 success")
  } else {
    console.log("Testcase TC-B04-006 Failed")
  }
  await driver.quit() 
}


async function TC_B04_007() {
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

  // await driver.findElement(By.id("id_enddate_hour")).click();

  // await driver.findElement(By.id("id_enddate_minute")).click();

  await driver.findElement(By.id("id_saveanddisplay")).click();
  
  if(await driver.findElement(By.id('id_error_enddate')).getText() == "The course end date must be after the start date.") {
    console.log("Testcase TC-B04-007 success")
  } else {
    console.log("Testcase TC-B04-007 Failed")
  }
  // await driver.quit() 
}
TC_B04_007()