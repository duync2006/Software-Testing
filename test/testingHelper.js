const {By, Key, Builder, until} = require("selenium-webdriver");
var XLSX = require('xlsx')
const Helper = {

  loginAsManager: async(driver) => {
    await driver.findElement(By.name("username")).sendKeys("manager");
    await driver.findElement(By.name("password")).sendKeys("moodle", Key.RETURN);

    if(await driver.wait(until.elementIsVisible(driver.findElement(By.id("page-header"))))) {
      // console.log("Login As Manager success")
    }
  },

  navigateToAddNewCourses: async(driver) => {
    await driver.findElement(By.xpath("//a[@href='https://school.moodledemo.net/admin/search.php']")).click()
    await driver.findElement(By.xpath("//a[@href='#linkcourses']")).click()
    await driver.findElement(By.xpath("//a[@href='https://school.moodledemo.net/course/edit.php?category=0']")).click()
  },

  readDataDriven: async() => {
    var workbook = XLSX.readFile('../TCB04.xlsx');
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    // console.log(xlData);
    return xlData
  }

}


module.exports = Helper