var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

function testAllValid(users){


    const isValid = users.every(function(user){
        const isExis = goodUsers.some(function(goodUser){
            return user.id === goodUser.id
        });
        return isExis;
    });
    return isValid;

}

testAllValid([{id: 1}, {id: 3}]);

function decimalToBinary(num) {
    const binaryNumber = num.toString(2);

    return binaryNumber;
}

const decimal = 10;
const binary = decimalToBinary(decimal);
console.log(binary);

function toBinary(v, str) {
    if (!Number.isSafeInteger(v) || v < 0) {
      throw new Error('v must be a non-negative integer');
    }
    if (v === 1) {
      return '1';
    }
    if (v === 0) {
      return '0';
    }
    return toBinary(Math.floor(v / 2)) + (v % 2);
  }