# online-testing

## Installation

1. ```git clone https://github.com/twofed1/online-testing.git```
2. open the project folder
3. ```composer install```
4. change DATABASE_URL in .env ```DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name"```
5. ```php bin/console doctrine:database:create```
6. you can change admin email and password in /src/DataFixtures/AppFixtures.php
```
$admin->setEmail("admin@dev.com");
$pass = $this->encoder->encodePassword($admin, 'admin');
```
6. ```php bin/console doctrine:migrations:diff```
7. ```php bin/console doctrine:migrations:migrate```
8. ```php bin/console doctrine:fixtures:load```
9. ```symfony server:start```
10. now you can open [app home page](http://localhost:8000/login) in your browser.
