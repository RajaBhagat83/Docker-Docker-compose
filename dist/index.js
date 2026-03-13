import express from "express";
import prisma from "./prisma.js";
const app = express();
app.post("/", async (req, res) => {
    await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: "123"
        },
    });
    return res.json({
        message: "get endpoint",
    });
});
app.get("/", async (req, res) => {
    const data = await prisma.user.findMany();
    return res.json({
        data
    });
});
app.listen(3000);
//# sourceMappingURL=index.js.map