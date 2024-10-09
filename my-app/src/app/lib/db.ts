import { Pool } from "pg";

// PostgreSQL接続設定
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // .env.local に DATABASE_URL を定義してください
  // 他のオプションも必要に応じて追加できます
});

// クエリを実行するための関数
export async function query(text: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } catch (err) {
    console.error("Database query error:", err);
    throw err;
  } finally {
    client.release();
  }
}
