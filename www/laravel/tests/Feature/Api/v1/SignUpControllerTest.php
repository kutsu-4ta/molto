<?php

namespace Tests\Feature\Api\v1;

use Tests\TestCase;

class SignUpControllerTest extends TestCase
{
    /**
     * 【テスト項目】
     * - [ ] エンドポイントにアクセスできる
     * - [ ] サインアップに必要なリクエストを取得できる
     * - [ ] バリデーションチェックができる
     * - [ ] Usersテーブルにデータを保存できる
     * 【実行コマンド】
     * php artisan test tests/Feature/Api/v1/SignUpControllerTest.php
     */

    public function setUp() :void
    {
        TestCase::setUp();
    }

    public function test_エンドポイントにアクセスできる()
    {
        // 検証対象
        $endPoint = route('signup_register');

        $requestUrl = $this->redirectAtDocumentRoot($endPoint);
        $response = $this->post($requestUrl);
        $response->assertStatus(200);
    }
}
