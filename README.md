
# Inventory Manager

<img width="1852" height="868" alt="2025-11-11 11 18 54 inventory-manager-zeta-six vercel app 7c699435d379" src="https://github.com/user-attachments/assets/79305139-8c0f-4107-a06b-6d3fefd64912" />

Inventory Manager is a demonstration application showcasing foundational concepts in content management systems (CMS), including relational data structures, database storage, authentication, and API integration. Designed as a test project, it serves as a practical example of implementing these principles rather than a tool for active store management.

You can view my development process and what I learned while building on my blog [here](https://www.hanascript.com/).


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Demo

Insert gif or link to demo


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  bun install
```

Start the server

```bash
  bun dev
```


## Deployment

To deploy this project, make sure you have synced your prisma schema with your data base by using

```bash
    bun prisma db push
```
Then check to see if everything went smoothy by running (be sure to have your database connected before running this as the build will fail if you don't)

```bash
    bun run build
```
If the project builds, you can run the application with

```bash
  bun start
```

Please be sure to add a post-install script to your package.json file if you choose to deplay this to a hosting service & to make sure your database is up to date.

```
  "postinstall": "prisma generate"
```


## Tech Stack

This application uses 
- NEXT 14
- Tailwind for css
- Next-Safe-Action for type safe server actions
- TipTap for custom inputs, Prisma for ORM
- Zod for validation
- Shadcn for base components


## API Reference

Because this application uses NEXT server actions there are no standard API routes (They can still be reached by viewing your http requests from your browser. NEXT hashes your server action routes).owever all routes can be found inside the `features` folder. Each route has a designated `actions` folder.


## Environment Variables

To run this project, you will need to add the following environment variable to your .env file

`DATABASE_URL`

Please be sure to link it to your database running either locally or hosted.


## Database Architecture


## Usage - Dashboard


## Usage - Customers


## Usage - Products


## Usage - Orders


## Usage- Mobile


## Achievements & Challenges


## Acknowledgements

This app was inspired by my buddy [Daedadev's](https://github.com/daedadev/Shop-CMS) original Shop-CMS project.


## Contributing

Contributions are always welcome, please follow standard contributing guidelines.


## Feedback & Support

If you have any feedback, please reach out to us at nate31196@outlook.com

