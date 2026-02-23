
import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();
const secretKey = "mysecretkey";
app.listen(8080,()=>
{
    console.log("server is starting");
});
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsImVtYWlsIjoiam9obkBleGFtcGxlLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzcxODMzODY1LCJleHAiOjE3NzE4Mzc0NjV9.HGZW6VcXKfPmXAl_XyGpb-twb6ORpozC-0Oe9dVWH4U"
const user=jwt.verify(token,secretKey);
console.log("Decoded user data:", user);
app.use(express.json());