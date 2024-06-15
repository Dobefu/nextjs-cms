.PHONY: install build watch lint analyze db-start db-stop db-restart db-init db-reset db-migrate sql

export PATH := $(PATH)

default: build

_pnpm:
	@which pnpm || npm i --global pnpm

install: _pnpm
	@pnpm install

build: _pnpm
	@pnpm run build

watch: _pnpm
	pnpm run dev

lint: _pnpm
	@pnpm run lint

analyze: _pnpm
	@pnpm run analyze


db-start:
	@docker-compose up -d

db-stop:
	@docker-compose stop

db-restart: db-stop db-start

db-init: _pnpm
	@npx prisma generate
	@npx prisma db seed

db-reset: _pnpm
	@npx prisma migrate reset
	@npx prisma generate
	@npx prisma db seed

db-migrate: _pnpm
	@npx prisma migrate dev

sql:
	@docker-compose exec -it db mariadb -uroot -proot db
