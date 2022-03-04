# Amplify + Next.js Starter

Built with Next.js and Amplify
- MUI v5 with ssr support
- [react-toastify](https://github.com/fkhadra/react-toastify)
- [nprogress](https://github.com/rstacruz/nprogress)
- Configured Amplify auth context, use `useAuthCtx` to retrieve current user
- Convenience utilities such as `callGraphQL` and `checkAuth` to use with typescript
- Simple withSSRAuth hoc for SSR


## Getting Started

First, install amplify CLI if have not installed yet:

```bash
npm install -g @aws-amplify/cli
```

Then initialize amplify project

```bash
amplify init
```

Install deps and run the dev server
```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

"amplify status" will show you what you've added already and if it's locally configured or deployed  
"amplify add <category>" will allow you to add features like user login or a backend API  
"amplify push" will build all your local backend resources and provision it in the cloud  
"amplify console" to open the Amplify Console and view your project status  
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud  


## Utils

### useAuthCtx

```typescript
  const {data, loading} = useAuthCtx()
  // data: CognitoUser | null
  // loading: boolean

```

### withSSRAuth

```typescript
  // pages/index.tsx

  export const getServerSideProps = withSSRAuth(async (ctx) => {
    return {
      props: {}
    }
  })
```
