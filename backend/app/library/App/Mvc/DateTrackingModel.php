<?php

namespace App\Mvc;

class DateTrackingModel extends \Phalcon\Mvc\Model
{
    public $createdAt;
    public $updatedAt;

    public function columnMap()
    {
        return [
            'created_at' => 'createdAt',
            'updated_at' => 'updatedAt',
        ];
    }

    public function beforeValidationOnCreate()
    {
        $this->createdAt = date('Y-m-d H:i:s');
        $this->updatedAt = $this->createdAt;
    }

    public function beforeValidationOnUpdate()
    {
        $this->updatedAt = date('Y-m-d H:i:s');
    }
}
