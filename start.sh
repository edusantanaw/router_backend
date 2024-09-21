#!/bin/sh
yarn prisma migrate dev --name=init
yarn dev
