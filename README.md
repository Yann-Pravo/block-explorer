# Ethereum Blocks Explorer 📊

### This app is deployed on Vercel
👉 https://block-explorer-coral.vercel.app/

This **Next.js** and **TypeScript** application interacts with the **Ethereum Holesky network** via **Infura API** to retrieve block data and store it in a database. The application displays block information in a user-friendly table, updating it every 10 seconds on the frontend side and periodically using a **cron job** to fetch the latest block. Users can sort, toggle, and manage the displayed blocks efficiently.

![Screenshot](https://github-production-user-asset-6210df.s3.amazonaws.com/625291/371018021-7bbe0407-1064-4f43-afd3-2f794806ac68.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240926%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240926T065301Z&X-Amz-Expires=300&X-Amz-Signature=be2b906f56447c8a02f4e00ec3ea35555e83bcc294ee95f2813d1b224ea57c6d&X-Amz-SignedHeaders=host)

---

## Features ✨

### Backend:
- **Retrieve latest Ethereum blocks** from the Holesky network using **Infura API**.
- **Store block data** in a database for persistent storage.
- **API for retrieving blocks**: List all stored blocks with fields such as size, number, timestamp, nonce, gasLimit, and hash.
- **Cron job for periodic fetching**: Automatically updates the database with the latest block at defined intervals.

### Frontend:
- **Display blocks** in a table with sortable fields.
- **Delete blocks**: User can delete some blocks or all of them.
- **Toggle block data**: Convert fields like size, number, and gasLimit between hexadecimal and decimal values.
- **Human-readable timestamp**: Toggle between Unix timestamp and human-readable date.
- **Real-time updates**: The table refreshes every 10 seconds to display the latest block information.
- **Delete blocks**: Users can delete individual blocks or the entire list.

### Cron Job ⏲️
  The app has a built-in cron job that runs every days to fetch and store the latest Ethereum block. You can adjust this interval by configuring the cron job in the server.

---

## Getting Started 🚀

### Installation:

1. **Run the application:**
   ```bash
   npm install
   npm run dev

2. **Set up environment variables: Create a .env.local file in the root of your project and add the following variables:**
   ```bash
   POSTGRES_URL=""
   POSTGRES_PRISMA_URL=""
   SUPABASE_URL=""
   NEXT_PUBLIC_SUPABASE_URL=""
   POSTGRES_URL_NON_POOLING=""
   SUPABASE_JWT_SECRET=""
   POSTGRES_USER=""
   NEXT_PUBLIC_SUPABASE_ANON_KEY=""
   POSTGRES_PASSWORD=""
   POSTGRES_DATABASE=""
   SUPABASE_SERVICE_ROLE_KEY=""
   POSTGRES_HOST=""
   SUPABASE_ANON_KEY=""
   NEXT_PUBLIC_INFURA_API_KEY=""

3. **Use it**
  Go to http://localhost:3000/ and click on the "See blocks" button

### Technical Choices
**Backend**
- I chose Next.js for its robust SSR (Server-Side Rendering) capabilities and API routes, making it a great fit for both frontend and backend handling.
- TypeScript was used for its static typing and type safety, ensuring fewer bugs and better developer experience.
- The application stores block data in a Supabase database, which offers a fast and scalable backend solution that integrates easily with Prisma.
- Prisma was chosen for its ease of use in querying the Supabase database and for its ability to provide type-safe database queries, ensuring a clean data layer between the application and the database.
- Backend functionalities reside within the /app directory. Some routes like /status and /cron are exposed as public APIs. These handle the backend tasks such as fetching the latest block and updating the database.
- ...
  
**Frontend**
- TailwindCSS was used to style the frontend components quickly and efficiently, providing a consistent and responsive design without the need for custom CSS.
- Safe Actions This ensures that invalid data does not cause runtime errors and keeps the app secure.
- Zod was used to define and validate the structure of data for safe API calls.
- ...

### Todo
- **Sorting**: Users can sort blocks by size, number, gasLimit, or other fields.
- **Form**: Use a form lib like React Hook Form.
- **Design**: Use a design lib like Shadcn to display more readable components.
- **Test**: Test the application
