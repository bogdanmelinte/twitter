<?php

/**
 * Read more on Config Files
 * @link http://phalcon-rest.redound.org/config_files.html
 */

return [

    'debug' => true,
    'hostName' => 'http://twitter-backend.dev',
    'clientHostName' => 'http://twitter-backend.dev',
    'database' => [

        // Change to your own configuration
        'adapter' => 'Mysql',
        'host' => 'backend-db',
        'username' => 'root',
        'password' => 'root',
        'dbname' => 'twitter',
    ],
    'cors' => [
        'allowedOrigins' => ['*']
    ]
];
