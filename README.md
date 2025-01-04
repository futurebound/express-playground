# Express Playground

Testing ground for Express

## Installation Instructions

```bash
pnpm install
```

## Setup Steps

```bash
pnpm add express
```

Add startup scripts to `package.json`:

```json
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
