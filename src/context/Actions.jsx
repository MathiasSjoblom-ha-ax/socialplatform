export const LoginStart = (user) => ({
    type: "LOGIN_START",
});

export const LoginDone = (user) => ({
    type: "LOGIN_DONE",
    package: user,
});

export const LoginFail = (error) => ({
    type: "LOGIN_FAIL",
    package: error
});