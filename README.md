# online-testing

## Installation

```
git clone https://github.com/twofed1/online-testing.git
composer install
```

Now you need to change DATABASE_URL in .env

```
php bin/console doctrine:database:create
php bin/console doctrine:migrations:diff
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load
symfony server:start
```

Now you can open [app home page](http://localhost:8000/login) in your browser.
