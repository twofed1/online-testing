# online-testing

## Installation

```
git clone
composer install
change DATABASE_URL in .env
bin/console doctrine:database:create
bin/console doctrine:migrations:diff
bin/console doctrine:migrations:migrate
bin/console doctrine:fixtures:load
symfony server:start
```

Now you can open [http://localhost:8000/login] in your browser.