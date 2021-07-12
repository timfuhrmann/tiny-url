**In progress:** this is a kind of TinyURL demo built with [Next.js](https://nextjs.org/) and [Node.js Express](https://expressjs.com/de/).

Check it out: https://tiny-url-pied.vercel.app/ - Backend requests might take a little longer at first, in case the heroku dyno is sleeping.

1. Request a "TinyURL"
2. Requested links will be saved in history giving additional information about a link, such as total clicks

## Frontend
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Vercel](https://vercel.com/)

## Backend
- [Express](https://expressjs.com/de/)
- [Node.js](https://nodejs.org/en/)
- [Redis](https://redis.io/)
- [Docker](https://www.docker.com/)
- [Heroku](https://www.heroku.com/)

## Getting Started
Run the development server:

### Frontend
```bash
npm run dev
# or
yarn dev
```

### Backend
Make sure you have a local redis instance running.

```bash
npm run start
# or
yarn start
```
