<?php

namespace Tests;


use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Artisan;
use PhpParser\Node\Scalar\String_;
use Tests\Services\RedirectAtDocumentRoot;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    use RedirectAtDocumentRoot;

    /**
     * テストの環境を設定する
     * クラスの実行前に一度だけ走る
     * @return void
     */
    public function setUp() :void
    {
        parent::setUp();
        Artisan::call('migrate:refresh');
    }
}
