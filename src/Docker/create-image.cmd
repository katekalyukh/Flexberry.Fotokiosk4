docker build --no-cache -f SQL\Dockerfile.PostgreSql -t fotokiosk4/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t fotokiosk4/app ../..
