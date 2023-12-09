const {By, Key, Builder, until, error} = require("selenium-webdriver");

const Helper = require('./testingHelper')

async function main() { 
  const objects =  await Helper.readDataDriven2()
  // console.log(objects)
  for( let i =0; i<objects.length; i++) {
   
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://school.moodledemo.net/login/index.php")
    await Helper.loginAsManager(driver)
    await Helper.navigateToScale(driver)

    console.log(`Begin testcase ${objects[i].TestcaseID}`)
    if (objects[i].id_name != 'Disabled' ) {
      await driver.findElement(By.id("id_name")).sendKeys(objects[i].id_name);
    }
    if (objects[i].id_scale != 'Disabled' ) {
      await driver.findElement(By.id("id_name")).sendKeys(objects[i].id_scale);
    }
    await driver.findElement(By.id("id_submitbutton")).click();

    if (objects[i].id_name != 'Disabled' ) {
      if (await driver.findElement(By.id("id_error_name")).getText() == '- Required') {
        console.log(`Testcase ${objects[i].TestcaseID} success`)
      } else if (objects[i].id_scale != 'Disabled') {
        if (await driver.findElement(By.id("id_error_scale")).getText() == '- Required') {
          console.log(`Testcase ${objects[i].TestcaseID} success`)
        }
      } else if (objects[i].id_scale != 'Bad, Medium, Good') {
        if (await driver.findElement(By.id("id_error_scale")).getText() == 'Duplicate scale') {
          console.log(`Testcase ${objects[i].TestcaseID} success`)
        }
      } else {
        if (await driver.findElement(By.id("id_error_scale")).getText() == '- Required') {
          console.log(`Testcase ${objects[i].TestcaseID} success`)
        } else {
          console.log(`Testcase ${objects[i].TestcaseID} failed`)
        }
      }
    }
    await driver.quit()
  }
}
main()