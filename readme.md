# React Streaming + TigrisDB

This is a sample application todo application which integrates all these frameworks,

1. vite 
2. vite-plugin-ssr
3. telefunc
4. tigrisDB
5. react (Streaming + Suspense)
6. blueprintjs (UI library)

This is a modified version of this [example](https://github.com/brillout/telefunc/tree/main/examples/react-streaming) from the telefunc repo

## Requirements

1. node >= v18.14.2
2. npm >= 8.15.0

## Installing

```sh
npm i
```

## Running

Add your Tigris creds in a `.env` file at the root,

```sh
TIGRIS_URI=api.preview.tigrisdata.cloud
TIGRIS_PROJECT=your_project
TIGRIS_CLIENT_ID=123xXxxx
TIGRIS_CLIENT_SECRET=ugXXX
TIGRIS_DB_BRANCH=main
```

Run Tigris Schema initialization script
```sh
npm run setup
```

Start the dev server
```sh
npm run dev
```

## Screenshots

<img width="1125" alt="Screenshot 2023-02-28 at 11 01 27 PM" src="https://user-images.githubusercontent.com/1687946/221931974-eb9d291c-eb43-4ef9-9646-7932148bb0d2.png">


