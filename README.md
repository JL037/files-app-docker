# Files Project

The files project allows you to upload, download and view files in the browser through API requests.
This is a dockerized project, sparing you the hassle of running things on your local machine.

## Running Things Locally (Dockerized)

To get the application up and running, simply execute:

```
docker compose --profile dev up --build
```

This will build the image, and spin up the container for you.
Q: What about the db? We need it locally no? And they need to have their own postgres db?
