const arr1 = [2, 3, 4, 5, 9];
const arr2 = [4 , 7];

//tím số nhỏ nhất of 2 mảng
const min1 = Math.min(...arr1);
const min2 = Math.min(...arr2);

//
const max1 = Math.max(...arr1);
const max2 = Math.max(...arr2)

console.log(min1, min2, max1, max2);

if(min1 < min2 && max1 > max2){
    console.log("mangr2 in mảng 1")
}else {
    console.log('khong co ket qua')
}