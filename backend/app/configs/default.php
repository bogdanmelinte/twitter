<?php

/**
 * Read more on Config Files
 * @link http://phalcon-rest.redound.org/config_files.html
 */

return [

    'application' => [
        'title' => 'Twitter REST',
        'description' => 'Twitter Backend API - Application',
        'baseUri' => '/',
        'viewsDir' => __DIR__ . '/../views/',
    ],

    'authentication' => [
        'secret' => 'twitter',
        'expirationTime' => 86400 * 7, // One week till token expires
    ]
];
