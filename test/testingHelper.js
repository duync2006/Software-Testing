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

  navigateToScale: async(driver) => {
    await driver.findElement(By.xpath("//a[@href='https://school.moodledemo.net/admin/search.php']")).click()
    await driver.findElement(By.xpath("//a[@href='#linkgrades']")).click()
    await driver.findElement(By.xpath("//a[@href='https://school.moodledemo.net/grade/edit/scale/index.php']")).click()
    await driver.get("https://school.moodledemo.net/grade/edit/scale/edit.php")
  },
  readDataDriven: async() => {
    var workbook = XLSX.readFile('../TCB07.xlsx');
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    // console.log(xlData);
    return xlData
  },
  readDataDriven2: async() => {
    var workbook = XLSX.readFile('../TCB08.xlsx');
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    // console.log(xlData);
    return xlData
  }

}


module.exports = Helper