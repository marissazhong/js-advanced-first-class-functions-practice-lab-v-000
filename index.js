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
  let sorted_driver = driver.slice(0);
  sorted_driver.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return sorted_driver;
}

function driversByName(driver) {
  let sorted_driver = driver.slice(0);
  sorted_driver.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  return sorted_driver;
}

function totalRevenue(driver) {
  let reduced = driver.reduce(function(a,b) {return {total: a.revenue + b.revenue}});
  return reduced.total;
}

function averageRevenue(driver) {

}
