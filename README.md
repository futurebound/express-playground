# Express Playground

Testing ground for Express

## Installation Instructions

```
pnpm install
```

## Setup Steps

```
pnpm add express
```

Add startup scripts to `package.json`:

```
{
  "main": "app.js",
  "type": "commonjs",
  "scripts": {
    "dev": "node --watch app.js",
}
```

## MVC - Model View Controller

General MVC Express App directory structure

```
express-app/
├─ errors/
│  ├─ CustomNotFoundError.js
├─ controllers/
│  ├─ authorController.js
├─ routes/
│  ├─ authorRouter.js
│  ├─ ... other routers
├─ app.js
├─ db.js
```
