<?php

namespace App\Transformers;


use App\Model\Post;
use PhalconRest\Transformers\ModelTransformer;

class PostTransformer extends ModelTransformer
{

    protected $modelClass = Post::class;

}