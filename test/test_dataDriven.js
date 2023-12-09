const {By, Key, Builder, until, error} = require("selenium-webdriver");

const Helper = require('./testingHelper')

async function main() { 
 const objects =  await Helper.readDataDriven()
  for( let i =0; i<objects.length; i++) {
   
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://school.moodledemo.net/login/index.php")
    await Helper.loginAsManager(driver)
    await Helper.navigateToAddNewCourses(driver)


    console.log(`Begin testcase ${objects[i].TestcaseID}`)
    if (objects[i].id_fullname != 'Disabled' ) {
      await driver.findElement(By.id("id_fullname")).sendKeys(objects[i].id_fullname);
    }

    if (objects[i].id_shortname != 'Disabled') {
      await driver.findElement(By.id("id_shortname")).sendKeys(objects[i].id_shortname);
    }

    if (objects[i].categories != 'Filled') {
      await driver.findElement(By.xpath("//div[@class='form-autocomplete-selection w-100 ']//span")).click();
    }

    if (objects[i].Enddate != 'Disabled') {
      await driver.findElement(By.id("id_enddate_day")).click();
      driver.findElement(By.xpath("//select[@id='id_enddate_day']/option[@value='23']")).click();

      await driver.findElement(By.id("id_enddate_month")).click();
      driver.findElement(By.xpath("//select[@id='id_enddate_month']/option[@value='10']")).click();

      await driver.findElement(By.id("id_enddate_year")).click();
      driver.findElement(By.xpath("//select[@id='id_enddate_year']/option[@value='2023']")).click();
    }
    
    await driver.findElement(By.id("id_saveanddisplay")).click();

    if (objects[i].id_fullname != 'Disabled' || objects[i].id_shortname != 'Disabled') {
      if(await driver.findElement(By.id('id_error_fullname')).isDisplayed() == true && await driver.findElement(By.id('id_error_shortname')).isDisplayed() == true) {
        if(await driver.findElement(By.id('id_error_shortname')).getText() == "- Missing short name" && await driver.findElement(By.id('id_error_fullname')).getText() == "- Missing full name") {
            console.log(`Testcase ${objects[i].TestcaseID} success`)
          }
      } else if (await driver.findElement(By.id('id_error_fullname')).isDisplayed() == true) {
        console.log(`Testcase ${objects[i].TestcaseID} success`)
      } else if (await driver.findElement(By.id('id_error_fullname')).isDisplayed() == true) {
        if (await driver.findElement(By.id('id_error_shortname')).getText() == "Short name is already used for another course (Developing)") {
          console.log(`Testcase ${objects[i].TestcaseID} success`)
        } 
      }
      console.log(`Testcase ${objects[i].TestcaseID} success`)
    } 
    else if (objects[i].categories != 'Filled') {
      if(await driver.findElement(By.id('id_error_category')).getText() == "- You must supply a value here.") {
        console.log(`Testcase ${objects[i].TestcaseID} success`)
      }
    }
    else if(objects[i].Enddate != 'Disabled') {
      if(await driver.findElement(By.id('id_error_enddate')).getText() == "The course end date must be after the start date.") {
        console.log(`Testcase ${objects[i].TestcaseID} success`)
      }
    }
    else {
      console.log(`Testcase ${objects[i].TestcaseID} Failed`)
    }
    await driver.quit() 
  }
}
main()


