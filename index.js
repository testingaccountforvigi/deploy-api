import express from 'express';
import cors from 'cors';
import checkCityCount from 'mahesh-city-count';

const app = express();

let users = [{ name: "Mahesh", city: "Mumbai" }, { name: "Vigilant", city: "Pune" }, { name: "Sid", city: "Banglore" }];

app.get("/api/v1/users", (req, res) => {

    let count = checkCityCount(users, "Mumbai");
    console.log(count);

    res.send(users);

})

app.listen(8000, () => {
    console.log("Server Up and Running")
})