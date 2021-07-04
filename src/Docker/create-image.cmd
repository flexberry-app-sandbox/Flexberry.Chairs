docker build --no-cache -f SQL\Dockerfile.PostgreSql -t chairs/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t chairs/app ../..
