# Friendlist

<p align="center" width="100%">
    <img width="90%" src="https://github.com/marllomartin/friendlist/blob/main/frontend/public/images/SCREENSHOT.png">
</p>

## About
A simple platform for displaying a list of friends developed for a technical challenge.

This full stack application includes a REST API in NodeJS, a login screen, and a friend list screen in ReactJS.

**Deploy:** https://friendlist.vercel.app/

## Technologies Used
#### Back-End
* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/en/)
  * [Express](https://expressjs.com/pt-br/)
  * [JWT](https://jwt.io/introduction)
  * [HTTP-Status-Codes](https://www.npmjs.com/package/http-status-codes)

#### Front-End
* [TypeScript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
  * [Styled Components](https://styled-components.com/)
  * [Axios](https://axios-http.com/ptbr/docs/intro)

## API Documentation

### Login

```http
  POST /login
```

Example Request:
```
{
  "email": "user@user",
  "password": "user123"
}
```
| Nome | Descrição | Tipo |
|:----------|:-------------------|:-------|
| `email` |  The email of the user logging in. | String |
| `password` | The password of the user logging in. | String |

<details><summary>Example Response:</summary>

<br>

```
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoibmV3dXNlciIsImlhdCI6MTY2ODc4ODcyMCwiZXhwIjoxNjY4ODc1MTIwfQ.8JPO-5tIqvQJAPUaoQspRt65ZnLqLxXBless1TNbDCk"
}
```
</details>

### Get Friendlist

```http
  GET /friendlist
```

Example Request:
```
header: 
{
  "authentication": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoibmV3dXNlciIsImlhdCI6MTY2ODc4ODcyMCwiZXhwIjoxNjY4ODc1MTIwfQ.8JPO-5tIqvQJAPUaoQspRt65ZnLqLxXBless1TNbDCk",
}
```
| Nome | Descrição | Tipo |
|:----------|:-------------------|:-------|
| `authorization` |  The token of the user who logged in. | String |

<details><summary>Example Response:</summary>

<br>

```
{
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    ...
  },
  ...
}

```
</details>
