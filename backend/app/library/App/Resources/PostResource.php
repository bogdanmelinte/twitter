<?php

namespace App\Resources;


use App\Constants\AclRoles;
use App\Model\Post;
use App\Transformers\PostTransformer;
use PhalconRest\Api\ApiEndpoint;
use PhalconRest\Api\ApiResource;
use PhalconRest\Mvc\Controllers\CrudResourceController;

class PostResource extends ApiResource
{

    public function initialize()
    {
        $this
            ->name('Post')
            ->model(Post::class)
            ->expectsJsonData()
            ->transformer(PostTransformer::class)
            ->itemKey('post')
            ->collectionKey('posts')
            ->deny(AclRoles::UNAUTHORIZED)
            ->handler(CrudResourceController::class)

            ->endpoint(ApiEndpoint::all())
            ->endpoint(ApiEndpoint::create())
            ->endpoint(ApiEndpoint::find())
            ->endpoint(ApiEndpoint::update())
            ->endpoint(ApiEndpoint::remove());
    }

}