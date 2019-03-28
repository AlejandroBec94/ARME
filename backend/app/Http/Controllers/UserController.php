<?php

namespace App\Http\Controllers;

use App\User;
use function GuzzleHttp\Promise\all;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api')->except('index', 'show');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function login(Request $request){

        $credentials = array('email' => $request->email, 'password' => $request->password);
        if (Auth::attempt($credentials, false)) {
//            $IpInfo = unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip=' . $request->ip() . '&radius=50'));
            /*DB::table('intra_logs')->insert([
                [
                    'LogUserID' => Auth::user()->UserID,
                    'LogUserCountry' => Auth::user()->UserCountry,
                    'LogCountry' => $IpInfo['geoplugin_city'],
                    'LogType' => 'Login',
                    'LogIP' => $request->ip(),
                    'LogIPExtraInfo' => json_encode($IpInfo),
                ],
            ]);*/
//            exec("php -f auto_login_intra.php ".$request->UserNick. " ".$request->password);
            return  auth()->guard('api')->user();;
//            return redirect()->intended('/');
        } else {
            //when echoing something here it is always displayed thus admin login is just refreshed.
            return redirect('/login')->withInput()->with('message', 'Login Failed');
        }

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
//        return auth()->guard('api')->user();
    }

    public function getAuth()
    {
        return auth()->guard('api')->user();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

}
