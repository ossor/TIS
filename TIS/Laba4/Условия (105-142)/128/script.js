let num = '22';
if (num <= 10 || num >= 99) {
    alert('Так и есть');
} if (num >= 10 && num <= 99) {
    let sum = num[0] + num[1]; 
        if (sum <= 9) {
            alert('Сумма цифр  не более 9, число однозначное');
        } else {
    alert('Число двузначное');
}}