// const addresses = [
//   '123 Broadway, New York, NY 10006',
//   '456 S Main St, Los Angeles, CA 90013',
//   '30 MORNINGSIDE DR, MANHATTAN, NY 10025',
//   '191 court st, brooklyn, ny 11201',
//   '2528 S GRAND AVE, LOS ANGELES, CA 90007',
//   '1278 ADEE AVE, THE BRONX, NY 10469',
//   '3480 3RD AVE, BRONX, NY 10456',
// ];

//sorted first by state
//street name

/**
 *
 * @param {array} array
 * @return {array}
 */
const sortAddress = array => {
  const arrayToObj = array.map(address => {
    const addressSplit = address.split(',').map(element => element.trimStart());
    const street = addressSplit.shift().split(' ');
    console.log(street);
    const [state, zip] = addressSplit.pop().split(' ');

    //const result = street.concat(addressSplit).concat(state, zip)

    const obj = {
      streetNum: street.shift(),
      street: street.join(' '),
      city: addressSplit[0],
      state: state,
      zip: zip,
    };
    console.log(obj);
    return obj;
  });

  arrayToObj.sort((a, b) => {
    const stateA = a.state.toUpperCase();
    const stateB = b.state.toUpperCase();

    const streetA = a.street.toUpperCase();
    const streetB = b.street.toUpperCase();
    if (stateA < stateB) {
      return -1;
    }
    if (stateA > stateB) {
      return 1;
    }

    if (stateA === stateB) {
      if (streetA < streetB) {
        return -1;
      }
      if (streetA > streetB) {
        return 1;
      }
    }

    // names must be equal
    return 0;
  });

  console.log(arrayToObj);
  return arrayToObj;
};

//console.log(sortAddress(addresses));

const addresses = [
  '123 Broadway, New York, NY 10006',
  '456 S Main St, Los Angeles, CA 90013',
  '30 MORNINGSIDE DR, MANHATTAN, NY 10025',
  '191 court st, brooklyn, ny 11201',
  '2528 S GRAND AVE, LOS ANGELES, CA 90007',
  '1278 ADEE AVE, THE BRONX, NY 10469',
  '3480 3RD AVE, BRONX, NY 10456',
];

//filter through the array and return only adress numbers less than 100
/**
 * @param {array} array
 * @return {array}
 */

const addressFilter = array => {
  const arrayToObj = array.map(address => {
    const addressSplit = address.split(',').map(element => element.trimStart());
    const street = addressSplit.shift().split(' ');
    console.log(street);
    const [state, zip] = addressSplit.pop().split(' ');

    //const result = street.concat(addressSplit).concat(state, zip)

    const obj = {
      streetNum: street.shift(),
      street: street.join(' '),
      city: addressSplit[0],
      state: state,
      zip: zip,
    };

    return obj;
  });

  const filteredArray = arrayToObj.filter(obj => {
    return obj.streetNum < 100;
  });
  console.log(filteredArray);
};

//console.log(addressFilter(addresses));
