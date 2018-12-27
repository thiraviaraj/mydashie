import React from 'react';

let loginPage = ()=> {
    return (
        <div id="loginWrapper">
            <form action="/action_page.php">
                <div className="imgcontainer">
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required/>

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                        
                    <button type="submit">Login</button>
                    <label>
                    <input type="checkbox" name="remember" /> Remember me
                    </label>
                </div>

                <div className="container">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <button type="button" className="cancelbtn">Login with Google</button>
                    <button type="button" className="cancelbtn">Login with Facebook</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    )
}

export default loginPage;