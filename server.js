require("dotenv").config();
const express = require("express");
const cors = require("cors");

const statsRoutes = require("./routes/stats");
const chartRoutes = require("./routes/chart");
const aiChatRoutes = require("./routes/aiChat");
const billingRoutes = require("./routes/billing");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/stats", statsRoutes);
app.use("/api/chart", chartRoutes);
app.use("/api/ai-chat", aiChatRoutes);
app.use("/api/billing", billingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
// --- IGNORE ---   
// For testing purposes only