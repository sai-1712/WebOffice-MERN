import { authActions } from "../slices/authSlice";

export const register = (userData) => async (dispatch) => {
    dispatch(authActions.registerUserreq());
    const res = await fetch("http://localhost:8000/signUp", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const out = await res.json();

    if (out.message === "signed up successfully") {
        dispatch(authActions.registerUsersuccess(out.data.user));
    } else {
        dispatch(authActions.registerUserfail(out.message));
    }
};

export const login = (userData) => async (dispatch) => {
    dispatch(authActions.loginRequest());
    const res = await fetch("http://localhost:8000/signIn", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const out = await res.json();
    // console.log(out);
    // console.log(out.data.userLogin.tokens[out.data.userLogin.tokens.length - 1].token);
    localStorage.setItem("jwttoken", JSON.stringify(out.data.userLogin.tokens[out.data.userLogin.tokens.length - 1]));

    if (out.message === "logged in successfully") dispatch(authActions.loginRequestSuccess(out.data.userLogin));
    else dispatch(authActions.loginRequestFail(out.message));
};

export const loadUser = () => async (dispatch) => {
    dispatch(authActions.loadUserRequest());
    // console.log("in actions");
    // console.log(JSON.parse(localStorage.getItem("jwttoken")));
    const res = await fetch("http://localhost:8000/getbytoken", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            jwttoken: localStorage.getItem("jwttoken"),
        },
    });
    const out = await res.json();
    console.log(out);
    if (out.message === "success") {
        dispatch(authActions.loadUserRequestSuccess(out.data.user));
    } else {
        dispatch(authActions.loadUserRequestFail(out.message));
    }
};
