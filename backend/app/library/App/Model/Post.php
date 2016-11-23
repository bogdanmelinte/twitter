<?php

namespace App\Model;


use App\Mvc\DateTrackingModel;

class Post extends DateTrackingModel
{
    public $id;
    public $text;
    public $tag;

    public function getSource()
    {
        return 'posts';
    }

    public function columnMap()
    {
        return parent::columnMap() + [
            'id' => 'id',
            'text' => 'text',
            'tag' => 'tag'
        ];
    }
}