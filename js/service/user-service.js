;!function () {

    let userService = {};

    userService.setCurrentUser = (user) => {
      if (!user) return;

      localStorage.setItem('currentUser', JSON.stringify(user));
    };

    userService.getCurrentUser = () => {
        let user = localStorage.getItem('currentUser');

        if (user == null) return;
        return JSON.parse(user);
    };

    userService.auth = (user)=> {
        let users = JSON.parse(localStorage.getItem('users'));
        if (!users) return;

        return users.find(u => u.username === user.username && u.password === user.password);
    };

    userService.removeCurrentUser = () => {
        localStorage.removeItem('currentUser');
    };

    window.userService = userService;
}();
