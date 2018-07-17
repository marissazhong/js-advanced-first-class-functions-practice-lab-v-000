// Code your solution in this file!

function logDriverNames(driver) {
  driver.forEach(function(element) {console.log(element.name)});
}

function logDriversByHometown(driver, location) {
  driver.forEach(function(element) {
    if (element.hometown === location) {
      console.log(element.name);
    }});
}

function driversByRevenue(driver) {

}

function driversByName(driver) {

}

function totalRevenue(driver) {

}

function averageRevenue(driver) {

}
