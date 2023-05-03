<?php

namespace App\Http\Controllers\Api\v1\SignIn;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class SignInController extends Controller
{

    private $registerProperties;

    public function __construct()
    {
        $this->loginProperties = [
            'uidOrEmail',
            'password',
        ];
    }

    public function logIn(Request $request){

        $request->only($this->loginProperties);

        $validator = Validator::make($request->all(), [
            'uidOrEmail'=>'required',
            'password'=>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status'=>405,
                'message'=>'validation Error',
                'validation_errors'=>$validator->messages(),
            ]);
        }

        // TODO: 判定ロジック
        $uidOrEmail = $request->get('uidOrEmail');
        $user = User::where('uid', $uidOrEmail)->first();
        if (!$user) {
            $user = User::where('email', $uidOrEmail)->first();
        }

        if(!$user){
            return response()->json([
                'status' => 401,
                'message'=> 'not exist this user',
            ]);
        }

        $isSafePassword = Hash::check($request->get('password'), $user->password);
        if (!$isSafePassword) {
            return response()->json([
                'status'=>401,
                'message'=>'input is not collect',
            ]);
        }

        Auth::login($user);

        $authUser = Auth::user();
        if(!$authUser){
            return response()->json([
                'status' => 401,
                'message'=> 'failed to login',
            ]);
        }

        // TODO: ログインセッションのIDをリアクトに渡す
        $token = 'tokenValue';
//        $token = $authUser->createToken($authUser->uid . '_Token')->plainTextToken;
        return response()->json([
            'status' => 200,
            'message' => 'login success!',
            'uid' => $authUser->uid,
            'token' => $token
        ]);
    }

    public function logOut(){
        auth()->user()->tokens()->delete();
        return response()->json([
            'status'=>200,
            'message'=>'ログアウト成功',
        ]);
    }
}
