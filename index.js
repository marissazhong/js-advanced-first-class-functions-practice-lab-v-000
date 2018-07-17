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
  sorted_driver = driver
  sorted_driver.sort(function(a, b) {
    return a.revenue - b.revenue;
  })
}

function driversByName(driver) {

}

function totalRevenue(driver) {

}

function averageRevenue(driver) {

}
