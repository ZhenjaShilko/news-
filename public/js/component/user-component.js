;!function (userService) {

    class UserComponent {

        constructor() {

        }

        init() {
            let currentUser = userService.getCurrentUser();
            let logInCell = document.querySelector('div.log-in-out');
            if  (!currentUser) {
                let signInButton = document.createElement('button');
                signInButton.textContent = 'sign-in';
                signInButton.addEventListener('click', this.signInClicked.bind(this));
                logInCell.appendChild(signInButton);
                return;
            }

            this.render(currentUser);
        }

        render(user) {

            console.log(user);

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
            form.className = 'auth-form';
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

            let form = document.querySelector('form.auth-form');
            user.username = form.querySelector('input.user-name').value;
            user.password = form.querySelector('input.user-password').value;

            if (!userService.auth(user)) return;

            this.render(user);
        }
    }

    window.UserComponent = UserComponent;
}(window.userService);
