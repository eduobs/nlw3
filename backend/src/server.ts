import express from 'express';

const app = express();
app.use(express.json());

app.post("/teste", (request, response) => {
    console.log(request.body);
});

app.listen(3333);