;!function () {

    let userService = {};

    userService.getCurrentUser = () => {

        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://localhost:3000/current_user', true);
            xhr.send();

            xhr.onload = () => {
                let user = (xhr.status !== 400) ? JSON.parse(xhr.responseText) : undefined;
                resolve(user);
            }
        })
    };

    userService.auth = (user)=> {
        if (!user) return;

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'http://localhost:3000/user', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(user));

            xhr.onload = () => {
                let user = (xhr.status !== 400)? JSON.parse(xhr.responseText): undefined;
                resolve(user);
            }
        });
    };

    userService.removeCurrentUser = () => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('DELETE', 'http://localhost:3000/logout');
            xhr.send();

            xhr.onload = () => {
                resolve();
            }
        })
    };

    window.userService = userService;
}();
