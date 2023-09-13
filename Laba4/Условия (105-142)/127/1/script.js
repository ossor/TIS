day = rand(1, 31);
monthDecade = null;
if ($day > 0 && $day <= 10) {
    $monthDecade = 'Первая декада месяца';
} else if ($day > 10 && $day <= 20) {
    $monthDecade = 'Вторая декада месяца';
} else {
    $monthDecade = 'Третья декада месяца';
}

