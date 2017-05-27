;!function (userService) {

    class UserComponent {

        constructor() {

        }

        init() {
            userService.getCurrentUser().then(currentUser => {
                let logInCell = document.querySelector('div.log-in-out');
                if  (!currentUser) {
                    let signInButton = document.createElement('button');
                    signInButton.textContent = 'sign-in';
                    signInButton.addEventListener('click', this.signInClicked.bind(this));
                    logInCell.appendChild(signInButton);
                    return;
                }

                this.render(currentUser);
            });
        }

        render(user) {

            if  (!user) return;

            let logInCell = document.querySelector('div.log-in-out');
            logInCell.innerHTML = '';
            let userNameLabel = document.createElement('label');
            userNameLabel.innerHTML = user.username;
            let signInOutButton = document.createElement('button');
            signInOutButton.textContent = 'sign-out';
            signInOutButton.addEventListener('click', this.signOutClicked.bind(this));

            logInCell.appendChild(userNameLabel);
            logInCell.appendChild(signInOutButton);
        }

        signInClicked() {
            let logInCell = document.querySelector('div.log-in-out');
            logInCell.innerHTML = '';
            let view = "<label for='user-name-id'>Name</label>" +
                "<input class='user-name' type='text' id='user-name-id'/>" +
                "<div class='clear'></div>" +
                "<label for='user-password-id'>Password</label>" +
                "<input class='user-password' type='password' id='user-password-id'/>" +
                "<input class='done-button' type='button' value='done'/>";

            let form = document.createElement('form');
            form.className = 'login-form';
            form.innerHTML = view;
            form.querySelector('input.done-button').addEventListener('click', this.doneClicked.bind(this));
            logInCell.appendChild(form);
        }

        signOutClicked() {
            let logInCell = document.querySelector('div.log-in-out');
            logInCell.innerHTML = '';
            let signInButton = document.createElement('button');
            signInButton.textContent = 'sign-in';
            signInButton.addEventListener('click', this.signInClicked.bind(this));
            logInCell.appendChild(signInButton);

            userService.removeCurrentUser();
        }

        doneClicked() {
            let user = {};

            let form = document.querySelector('form.login-form');
            user.username = form.querySelector('input.user-name').value;
            user.password = form.querySelector('input.user-password').value;

            userService.login(user).then(user => {
                if  (!user) return;
                this.render(user);
            });
        }
    }

    window.UserComponent = UserComponent;
}(window.userService);
