import sqlite3 from "sqlite3";
import { fetchAll } from "./sql.js";

export const showAllItems = async () => {
    const db = new sqlite3.Database("test.db");

    const sql = "SELECT * FROM products";
    try {
        const products = await fetchAll(db, sql);
        console.log(products);
    } catch (err) {
        console.log(err);
    } finally {
        db.close();
    }
};

showAllItems();


