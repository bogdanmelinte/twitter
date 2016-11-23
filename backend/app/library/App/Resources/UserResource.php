<?php

namespace App\Resources;

use PhalconRest\Api\ApiResource;
use PhalconRest\Api\ApiEndpoint;
use App\Model\User;
use App\Transformers\UserTransformer;
use App\Controllers\UserController;
use App\Constants\AclRoles;

class UserResource extends ApiResource {

    public function initialize()
    {
        $this
            ->name('User')
            ->model(User::class)
            ->expectsJsonData()
            ->transformer(UserTransformer::class)
            ->handler(UserController::class)
            ->itemKey('user')
            ->collectionKey('users')
            ->deny(AclRoles::UNAUTHORIZED, AclRoles::USER)

            ->endpoint(ApiEndpoint::all()
                ->allow(AclRoles::USER)
                ->description('Returns all registered users')
            )
            ->endpoint(ApiEndpoint::get('/me', 'me')
                ->allow(AclRoles::USER)
                ->description('Returns the currently logged in user')
            )
            ->endpoint(ApiEndpoint::post('/authenticate', 'authenticate')
                ->allow(AclRoles::UNAUTHORIZED)
                ->deny(AclRoles::AUTHORIZED)
                ->description('Authenticates user credentials provided in the authorization header and returns an access token')
                ->exampleResponse([
                    'token' => 'co126bbm40wqp41i3bo7pj1gfsvt9lp6',
                    'expires' => 1451139067
                ])
            );
    }
}