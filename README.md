# Setup
1. Clone
```
git clone https://github.com/allanling/incube8.git
```

2. Build
**NOTE:** *If you're using older mac before Apple Sillicon, comment off line 32 in docker-compose.yml to install the correct mysql image*
```
cd incube8/backend
docker compose up -d --build
```

3. Confirm that mysql is running
```
docker compose exec db mysql -uincube8 -pincube8
```

4. Run the following snippet after entering php shell `docker compose exec php bash`
```
chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache
chmod -R 775 /var/www/storage /var/www/bootstrap/cache
composer setup
```

5. Setup and run frontend
```
cd ../frontend
npm run setup
npm start
```

6. Access the app > http://localhost:3000/

# Notes
- API token is generate from DatabaseSeeder and copied to frontend .env for the conveniences of this setup. In real world API token would be generated seperately.
- Every minute, arrival time will be deducted by 1 min to simulate real-time bus arrival timing. But in real life, the timing would not be that on point.