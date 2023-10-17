import { API_BASE_URL } from "./api-config";

export const call = (api, method, request) => {
    let headers = new Headers({
        "Content-Type" : "application/json",
    });
    let options = {
        headers: headers,
        url: API_BASE_URL + api,
        method: method,
    };

    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (accessToken && accessToken !== null) {
        headers.append("Authorization", "Bearer " + accessToken);
    }

    if (request) {
        //get method
        console.log("request=="+request);
        options.body = JSON.stringify(request);
    }

    return fetch(options.url, options).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else if (response.status === 403) {
            window.location.href = "/login";
        }
    }).catch((error) => {
        console.log("http error");
        console.log(error);
    });
};

export function signin(userDTO) {
    return call("/auth/signin", "POST", userDTO)
    .then((response) => {
        if (response.token) {
            //로컬스토리지에 토큰저장
            localStorage.setItem("ACCESS_TOKEN", response.token);
            //token이 존재하는 경우 Todo 화면으로 리다이렉트
            window.location.href = "/";
        }
        console.log("response", response);
        
    });
}

export function signout() {
    localStorage.setItem("ACCESS_TOKEN", null);
    window.location.href = "/login";
}

export function signup(userDTO) {
    return call("/auth/signup", "POST", userDTO);
}