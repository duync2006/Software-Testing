const {By, Key, Builder, until, error} = require("selenium-webdriver");

const Helper = require('./testingHelper')

async function TC_B08_001() {
  // console.log(data[0])
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToScale(driver)
  
  await driver.findElement(By.id("id_name")).sendKeys("superhard/bonus");
  await driver.findElement(By.id("id_scale")).sendKeys("bad/niceeeee");

  await driver.findElement(By.id("id_submitbutton")).click();

  
  if(await driver.getTitle() == 'Scales | Grades | Administration | Mount Orange School') {
    console.log('Testcase TC_B08_001 success')
  } else {
    console.log('Testcase TC_B08_001 failed')
  }

  await driver.quit()
}


async function TC_B08_002() {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToScale(driver)
  
  await driver.findElement(By.id("id_name")).sendKeys("<script>console.log('hello')</script>");
  await driver.findElement(By.id("id_scale")).sendKeys("<script>console.log('hello')</script>");

  await driver.findElement(By.id("id_submitbutton")).click();

  if(await driver.getTitle() == 'Scales | Grades | Administration | Mount Orange School') {
    console.log('Testcase TC_B08_002 success')
  } else {
    console.log('Testcase TC_B08_002 failed')
  }

  await driver.quit() 
}
  
async function TC_B08_003() {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToScale(driver)
  
  await driver.findElement(By.id("id_name")).sendKeys("");
  await driver.findElement(By.id("id_scale")).sendKeys("hello");

  await driver.findElement(By.id("id_submitbutton")).click();

  if (await driver.findElement(By.id("id_error_name")).getText() == '- Required') {
    console.log('Testcase TC_B08_003 success')
  } else {
    console.log('Testcase TC_B08_003 failed')
  }

  await driver.quit() 
}



async function TC_B08_004() {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToScale(driver)
  
  await driver.findElement(By.id("id_name")).sendKeys("SuperHard/Bonus");
  await driver.findElement(By.id("id_scale")).sendKeys("");

  await driver.findElement(By.id("id_submitbutton")).click();

  if (await driver.findElement(By.id("id_error_scale")).getText() == '- Required') {
    console.log('Testcase TC_B08_004 success')
  } else {
    console.log('Testcase TC_B08_004 failed')
  }
  await driver.quit() 
}


async function TC_B08_005() {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToScale(driver)
  
  await driver.findElement(By.id("id_name")).sendKeys("SuperHard/Bonus");
  await driver.findElement(By.id("id_scale")).sendKeys("Bad, Medium, Good");

  await driver.findElement(By.id("id_submitbutton")).click(); 

  if (await driver.findElement(By.id("id_error_scale")).getText() == 'Duplicate scale') {
    console.log('Testcase TC_B08_005 success')
  } else {
    console.log('Testcase TC_B08_005 failed')
  }
  await driver.quit() 
}

TC_B08_005()
