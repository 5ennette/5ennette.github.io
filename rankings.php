<?php

// Import the Excel spreadsheet data
$data = array_map(function($row) {
    return [
        'rank' => $row['Rank'],
        'name' => $row['Name'],
        'score' => $row['Score'],
        'image' => $row['Image'],
    ];
}, array_values(read_excel('rankings.csv')));

// Sort the data by score
usort($data, function($a, $b) {
    return $a['score'] <=> $b['score'];
});

// Print the data to the page
foreach ($data as $row) {
    echo '<tr>';
    echo '<td>' . $row['rank'] . '</td>';
    echo '<td>' . $row['name'] . '</td>';
    echo '<td>' . $row['score'] . '</td>';
    echo '<td><img src="' . $row['image'] . '"></td>';
    echo '</tr>';
}

?>
