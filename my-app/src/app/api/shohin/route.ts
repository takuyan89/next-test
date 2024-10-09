import { NextRequest, NextResponse } from "next/server";
import { query } from "../../lib/db"; // データベース接続のための関数をインポート

// GETリクエストの処理
export async function GET(req: NextRequest) {
  try {
    // データベースから商品情報を取得
    const result = await query("SELECT * FROM shohin"); // 'products' はテーブル名
    const products = result.rows; // データベースから取得した商品一覧

    // 商品データをJSON形式で返す
    return NextResponse.json(products, { status: 200 });
  } catch (err) {
    // エラーハンドリング
    return NextResponse.json(
      { message: "Error retrieving products", error: (err as Error).message },
      { status: 500 }
    );
  }
}
