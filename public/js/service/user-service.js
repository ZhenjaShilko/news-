;!function () {

    let userService = {};

    userService.getCurrentUser = () => {

        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('GET', 'http://localhost:3000/islogin', true);
            request.send();

            request.onload = () => {

                if (request.status === 200) return resolve(JSON.parse(request.responseText));
                return resolve();
            }
        })
    };

    userService.login = (user)=> {
        if (!user) return;

        return new Promise((resolve, reject) => {

            let request = new XMLHttpRequest();
            request.open('POST', 'http://localhost:3000/user', true);
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(user));

            request.onload = () => {
                if (request.status === 200) return resolve(JSON.parse(request.responseText));
                return resolve();
            }
        });
    };

    userService.removeCurrentUser = () => {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('DELETE', 'http://localhost:3000/logout', true);
            request.send();

            request.onload = () => { resolve() }
        })
    };

    window.userService = userService;
}();
