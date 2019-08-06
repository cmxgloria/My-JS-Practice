try {
  throw new Error('Customer Error');
}
catch (e) {
  console.log(e.name + ' - ' + e.message);
}
//'Error - Customer Error'

