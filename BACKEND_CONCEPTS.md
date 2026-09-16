1. jobSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id;
    return ret;
  },
});

MongoDB normally gives every job an "_id". This code also creates "id" from "_id".

This is useful because in the frontend we can simply use "job.id".
example - <JobListing key={job.id} {...job} />

2. app.use(cors());

CORS means Cross-Origin Resource Sharing.
Our frontend and backend can run on different ports. CORS allows the frontend to communicate with the backend without the browser blocking the request.
For example, our frontend runs on port "5173" and backend runs on port "4000".

3. proxy: {
  "/api": {
    target: "http://localhost:4000",
    changeOrigin: true,
  },
},

The proxy connects our frontend requests to the backend.
Because of the proxy, in React we can write:

js
fetch("/api/jobs");


instead of writing:

js
fetch("http://localhost:4000/api/jobs");


So when we use `/api/jobs`, Vite sends the request to the backend running on port `4000`.

This makes the frontend code simpler and we do not need to write the full backend URL every time.

