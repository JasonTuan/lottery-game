# lottery-game
Lottery Games

Greating Start
- Clone repository
```bash
git clone https://github.com/JasonTuan/lottery-game.git
```

- Docker up
```bash
cd lottery-game/docker
docker-compose -p="lottery-game" up --build -d
```

- Run Web. Open browser and access to url http://localhost:7777

If have permission error. Try resolve follow.
```bash
docker exec -it LotteryNginx /bin/bash
chown -R www-data:www-data /var/www/html
```
