;!function () {

    let userService = {};

    userService.getCurrentUser = () => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/current_user', false);
        xhr.send();

        return (xhr.status !== 400)? JSON.parse(xhr.responseText): undefined;
    };

    userService.auth = (user)=> {
        if (!user) return;

        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:3000/user', false);
        xhr.setRequestHeader('Content-Type', 'application/json', false);
        xhr.send(JSON.stringify(user));

        return (xhr.status !== 400)? JSON.parse(xhr.responseText): undefined;
    };

    userService.removeCurrentUser = () => {
       let xhr = new XMLHttpRequest();
       xhr.open('DELETE', 'http://localhost:3000/logout');
       xhr.send();
    };

    window.userService = userService;
}();
