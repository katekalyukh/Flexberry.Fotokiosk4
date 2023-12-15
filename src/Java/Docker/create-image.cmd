docker build --no-cache -f SQL\Dockerfile.PostgreSql -t fotokiosk4-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t fotokiosk4-java/app ../../..
