const {By, Key, Builder, until} = require("selenium-webdriver");

const Helper = require('./testingHelper')


async function TC_B04_001() {
  console.log("Read CSV File")
  const data = await Helper.readDataDriven()
  
  // console.log(data[0])
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://school.moodledemo.net/login/index.php")
  await Helper.loginAsManager(driver)
  await Helper.navigateToAddNewUSer(driver)
  
  await driver.findElement(By.id("id_username")).sendKeys(data[0].id_username);

  await driver.findElement(By.xpath("//a[@data-passwordunmask='edit']")).click();
  await driver.findElement(By.id("id_newpassword")).sendKeys(data[0].id_password);
  
  await driver.findElement(By.id("id_firstname")).sendKeys(data[0].id_firstname);
  
  await driver.findElement(By.id("id_lastname")).sendKeys(data[0].id_lastname);
  
  await driver.findElement(By.id("id_email")).sendKeys(data[0].id_email);

  await driver.findElement(By.id("id_submitbutton")).click();
  
  if(await driver.findElement(By.name("alert alert-success alert-block fade in  alert-dismissible")).isDisplayed()) {
    console.log("Testcase TC-B04-001 success")
  }
}

TC_B04_001();