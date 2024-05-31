![AdviseMe LogoPNG](https://hackmd.io/_uploads/r1qGR0E4A.png)

# Backend part of the project

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Objetive

This part of the project requires a functional API wich will manage a IT Cases registration

## DB Diagram

![Screenshot 2024-05-31 183307](https://hackmd.io/_uploads/SyFkn_PVC.png)

## Local Installation

1. Clone the repository git clone https://github.com/agustinresecodev/Advisement-Backend
2. Initialice the project npm init -y
3. Install the necessary modules npm i express npm i -D typescript
4. Install node and express types npm i -D @types/node npm i -D @types/express
5. Install additional modules:
   `npm i cors `
   `npm i -D @types/cors `
   `npm i -D nodemon `
   `npm i -D ts-node`
   `npm i bcrypt `
   `npm i -D @types/bcrypt `
   `npm i @faker-js/faker `
   `npm i jsonwebtoken`
   `npm i -D @types/jsonwebtoken `
   `npm i dotenv `
   `npm i typeorm reflect-metadata mysql2`
6. Connect our project with the DataBase in the project's root folder search for .env-example to generate a .env file to have the principals variables
7. Execute the Migrations `npm run db:migrate`
8. Execute the Seeders `npm run db:seed`
9. Run the server `npm run dev`

## EndPoints

<details>
    <summary>Endpoint</summary>

    - AUTH
        - REGISTER
                POST http://localhost:3000/api/auth/register
                body:

                    {
                        "firstName":"asdasdasd",
                        "lastName":"asdasdasd",
                        "email":"asdasdasd@1234",
                        "phone":"123345567",
                        "password":"12345678"

                    }

        - LOGIN

            POST http://localhost:3000/api/auth/login
            body:

                {

                    "email": "david@david.com",
                    "password": "princes"
                }

    - CASES
        - GET ALL CASES
            GET http://localhost:3000/api/cases/

        - GET ALL CASES BY LOGED USER
            GET http://localhost:3000/api/cases/technician/

        - GET CASE BY ID
            GET http://localhost:3000/api/cases/:id

        - EDIT CASE BY ID
            PUT http://localhost:3000/api/cases/:id

            body:
                {
                    "id": 7,
                    "description": "algo paso",
                    "status": true,
                    "createdAt": "2023-10-31T18:56:21.000Z",
                    "updatedAt": "2024-05-20T11:29:10.629Z",
                    "initialDate": "1/1/2021",
                    "finalDate": "2/1/2023",
                    "user": 1,
                    "client": 5
                }
        - DELETE CASE BY ID
            DELETE http://localhost:3000/api/cases/:id

        - CREATE CASE
            POST http://localhost:3000/api/cases/
            body:
                {
                    "description": "algo paso",
                    "user": 1,
                    "client": 5
                }
    - CLIENTS
        - GET ALL CLIENTS
            GET http://localhost:3000/api/clients/
        - GET CLIENT BY ID
            GET http://localhost:3000/api/clients/:id
        - EDIT CLIENT
            PUT http://localhost:3000/api/clients/:id

            body:
                {
                    "name":"asdasd",
                    "email":"e@e",
                    "phone":"phone",
                    "address":"address",
                    "cif":"cif",
                    "contactName":"contactName"
                }
        - DELETE CLIENT
            DELETE http://localhost:3000/api/clients/:id

        - CREATE CLIENT
            POST http://localhost:3000/api/clients/
                body:{
                    "name":"asdasd",
                    "email":"e@e",
                    "phone":"phone",
                    "address":"address",
                    "cif":"cif",
                    "contactName":"contactName"
                    }
    - USERS
        - GET ALL USERS
            GET http://localhost:3000/api/users/
        - GET SELF PROFILE
            GET http://localhost:3000/api/users/profile
        - EDIT SELF PROFILE
            PUT http://localhost:3000/api/profile
            body:{
                "firstName": "Daisy",
                "lastName": "Loweeeee",
                "email": "Doris.Gerlach-Funk@yahoo.comz",
                "phone": 290867512,
                "isActive": true
                }
        - GET TECHS
            GET http://localhost:3000/api/users/techs
        - GET USER BY ID
            GET http://localhost:3000/api/users/:id
        - DELETE USER
            DELETE http://localhost:3000/api/users/:id



</details>

## Dependencies used

faker
bcrypt
colors
cors
dotenv
express
http-status-codes
jsonwebtoken
mysql2
reflect-metadata
TypeORM

## Dev Dependences

@types/bcrypt
@types/cors
@types/express
@types/jsonwebtoken
@types/node
nodemon
ts-node
typescript
